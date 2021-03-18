import { Button, Divider, Form, Input, notification } from "antd";
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { RouteComponentProps } from "react-router";
import { FdmLoading } from "../../shared/components/FdmLoading";
import { useAuthedUser } from "../../shared/hooks/useAuthedUser";
import { useFdmStore } from "../../shared/store/useFdmStore";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { RegisterFormRules } from "../auth/RegisterFormRules";
import { useOtpSender } from "../otp/useOtpSender";
import { UserFormRules } from "../user/UserFormRules";
import { UserService } from "../user/UserService";

interface IActionButtonGroupProps {
  onCancel: any;
  onEdit: any;
  onSave: any;
  edit: boolean;
  saveBtnTitle?: string;
  editBtnTitle?: string;
}

function ActionButtonGroup(props: IActionButtonGroupProps) {
  const [saveLoading, setSaveLoading] = useState(false);
  const { onSave } = props;
  const save = useCallback(async () => {
    setSaveLoading(true);
    await onSave();
    setSaveLoading(false);
  }, [onSave]);

  return props.edit ? (
    <div>
      <Button
        type="primary"
        shape="round"
        className="mb-2 w-full"
        loading={saveLoading}
        onClick={save}
      >
        {props.saveBtnTitle ? props.saveBtnTitle : "Save"}
      </Button>
      <Button
        className="w-full"
        shape="round"
        onClick={() => props.onCancel(false)}
      >
        Cancel
      </Button>
    </div>
  ) : (
    <Button
      className="w-full"
      type="primary"
      shape="round"
      onClick={() => props.onEdit(true)}
    >
      {props.editBtnTitle ? props.editBtnTitle : "Edit"}
    </Button>
  );
}

export function ProfileEditForm(props: RouteComponentProps) {
  const store = useFdmStore();
  const dispatch = store[1];
  const { authedUser, loading } = useAuthedUser();
  const [emailForm] = Form.useForm();
  const [flNameForm] = Form.useForm();
  const [editEmail, setEditEmail] = useState(false);
  const [editFlName, setEditFlName] = useState(false);
  const [saveEmailLoading, setSaveEmailLoading] = useState(false);
  const [email, setEmail] = useState<any>();
  const otpSender = useOtpSender();

  const remainDaysToUpdateEmail = useMemo(() => {
    if (authedUser && authedUser.updatedEmailDate) {
      return 30 - moment().diff(moment(authedUser?.updatedEmailDate), "days");
    }
    return -1;
  }, [authedUser]);

  const getEmail = useCallback(async () => {
    let email;
    try {
      const values = await emailForm.validateFields();
      email = values.email;
    } catch {
      return false;
    }
    return email;
  }, [emailForm]);

  const { sendOtp: _sendOtp } = otpSender;
  const sendOtp = useCallback(async () => {
    const email = await getEmail();
    if (!email) return;
    await _sendOtp({ ...authedUser, email } as any);
    setEmail(email);
  }, [getEmail, _sendOtp, authedUser]);

  const saveEmail = useCallback(
    async (payload: any) => {
      setSaveEmailLoading(true);
      try {
        await UserService.updateEmail(payload);
        setEditEmail(false);
        dispatch("SET_USER", { ...authedUser, email: payload.email });
        notification.success({
          message: "Success",
          description: "Update email success",
        });
      } catch (err) {
        console.error(err);
        NotificationUtils.error(err.message);
      }
      setSaveEmailLoading(false);
    },
    [dispatch, authedUser]
  );

  const saveFlName = useCallback(async () => {
    let payload: any;
    try {
      payload = await flNameForm.validateFields();
    } catch {
      return;
    }

    try {
      await UserService.updateFirstLastName(payload);
      setEditFlName(false);
      dispatch("SET_USER", { ...authedUser, ...payload });
      notification.success({
        message: "Success",
        description: "Update first name, last name success",
      });
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
  }, [flNameForm, authedUser, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <FdmLoading />
      </div>
    );
  }

  const { SendOtpButton } = otpSender;
  return (
    <div>
      <Form.Item>
        <label className="block mb-2">Username</label>
        <Input disabled defaultValue={authedUser?.username} />
      </Form.Item>
      <Divider />
      <Form
        form={emailForm}
        initialValues={{ email: authedUser.email }}
        onFinish={saveEmail}
      >
        <label className="block mb-2">
          E-mail {editEmail && <b className="text-red-400">*</b>}
        </label>
        <Form.Item name="email" rules={RegisterFormRules.email}>
          <Input
            disabled={!editEmail}
            placeholder="E-mail..."
          />
        </Form.Item>
        {!email && remainDaysToUpdateEmail < 0 && (
          <Form.Item>
            <ActionButtonGroup
              edit={editEmail}
              saveBtnTitle="Continue"
              editBtnTitle="Edit email"
              onSave={sendOtp}
              onCancel={() => setEditEmail(false)}
              onEdit={() => setEditEmail(true)}
            />
          </Form.Item>
        )}
        {
          <p className="my-0 text-red-400">
            Please wait for {remainDaysToUpdateEmail} days to update your email
          </p>
        }
        {!!email && (
          <>
            <label className="block mb-2">
              OTP <b className="text-red-400">*</b>
            </label>
            <Form.Item name="otp" rules={RegisterFormRules.otp}>
              <Input placeholder="OTP..." />
            </Form.Item>
            <Form.Item>
              <SendOtpButton
                className="w-full mb-4"
                onClick={() =>
                  otpSender.sendOtp({
                    ...authedUser,
                    email,
                  } as any)
                }
              />
              <Button
                type="primary"
                shape="round"
                className="w-full"
                htmlType="submit"
                loading={saveEmailLoading}
              >
                Save new email
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
      <Divider />
      <Form
        form={flNameForm}
        initialValues={{
          firstName: authedUser.firstName,
          lastName: authedUser.lastName,
        }}
      >
        <label className="block mb-2">
          First name {editFlName && <b className="text-red-400">*</b>}
        </label>
        <Form.Item name="firstName" rules={UserFormRules.firstName}>
          <Input disabled={!editFlName} placeholder="First name..." />
        </Form.Item>
        <label className="block mb-2">
          Last name {editFlName && <b className="text-red-400">*</b>}
        </label>
        <Form.Item name="lastName" rules={UserFormRules.lastName}>
          <Input disabled={!editFlName} placeholder="Last name..." />
        </Form.Item>
        <Form.Item>
          <ActionButtonGroup
            edit={editFlName}
            editBtnTitle="Edit first & last name"
            onSave={() => saveFlName()}
            onCancel={() => setEditFlName(false)}
            onEdit={() => setEditFlName(true)}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

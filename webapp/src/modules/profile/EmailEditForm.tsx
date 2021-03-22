import React, { useCallback, useMemo, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import moment from "moment";
import { IUser } from "../../shared/entities/IUser";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { RegisterFormRules } from "../auth/RegisterFormRules";
import { useOtpSender } from "../otp/useOtpSender";
import { UserService } from "../user/UserService";
import { ProfileActionButtonGroup } from "./ProfileActionButtonGroup";

interface IEmailEditFormProps {
  authedUser: IUser;
  onSaveSuccess: (email: string) => any;
}

export function EmailEditForm(props: IEmailEditFormProps) {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [email, setEmail] = useState<any>();

  const getEmail = useCallback(async () => {
    let email;
    try {
      const values = await form.validateFields();
      email = values.email;
    } catch {
      return false;
    }
    return email;
  }, [form]);

  const { authedUser, onSaveSuccess } = props;
  const otpSender = useOtpSender();
  const { sendOtp: _sendOtp, SendOtpButton } = otpSender;
  const sendOtp = useCallback(async () => {
    const email = await getEmail();
    if (!email) return;
    await _sendOtp({ ...authedUser, email } as any);
    setEmail(email);
  }, [getEmail, _sendOtp, authedUser]);

  const remainDaysToUpdateEmail = useMemo(() => {
    if (authedUser && authedUser.updatedEmailDate) {
      return 30 - moment().diff(moment(authedUser?.updatedEmailDate), "days");
    }
    return -1;
  }, [authedUser]);

  const saveEmail = useCallback(
    async (payload: any) => {
      setSaveLoading(true);
      try {
        await UserService.updateEmail(payload);
        setEdit(false);
        onSaveSuccess(payload.email);
        notification.success({
          message: "Success",
          description: "Update email success",
        });
      } catch (err) {
        console.error(err);
        NotificationUtils.error(err.message);
      }
      setSaveLoading(false);
    },
    [onSaveSuccess]
  );

  return (
    <Form
      form={form}
      initialValues={{ email: authedUser.email }}
      onFinish={saveEmail}
    >
      <label className="block mb-2">
        E-mail {edit && <b className="text-red-400">*</b>}
      </label>
      <Form.Item name="email" rules={RegisterFormRules.email}>
        <Input disabled={!edit} placeholder="E-mail..." />
      </Form.Item>
      {!email && remainDaysToUpdateEmail < 0 && (
        <Form.Item>
          <ProfileActionButtonGroup
            edit={edit}
            saveBtnTitle="Continue"
            editBtnTitle="Edit email"
            onSave={sendOtp}
            onCancel={() => setEdit(false)}
            onEdit={() => setEdit(true)}
          />
        </Form.Item>
      )}
      {remainDaysToUpdateEmail > 0 && (
        <p className="my-0 text-red-400">
          Please wait for {remainDaysToUpdateEmail} days to update your email
        </p>
      )}
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
              loading={saveLoading}
            >
              Save new email
            </Button>
          </Form.Item>
        </>
      )}
    </Form>
  );
}

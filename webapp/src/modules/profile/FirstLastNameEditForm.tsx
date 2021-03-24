import { Form, Input, notification } from "antd";
import React, { useCallback, useState } from "react";
import { IUser } from "../../shared/entities/IUser";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { UserFormRules } from "../user/UserFormRules";
import { UserService } from "../user/UserService";
import { ProfileActionButtonGroup } from "./ProfileActionButtonGroup";

interface IFirstLastNameEditFormProps {
  authedUser: IUser;
  onSaveSuccess: (payload: any) => any;
}

export function FirstLastNameEditForm(props: IFirstLastNameEditFormProps) {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  
  const { authedUser, onSaveSuccess } = props;
  const saveFlName = useCallback(async () => {
    let payload: any;
    try {
      payload = await form.validateFields();
    } catch {
      return;
    }

    try {
      await UserService.updateFirstLastName(payload);
      setEdit(false);
      onSaveSuccess(payload);
      notification.success({
        message: "Success",
        description: "Update first name, last name success",
      });
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
  }, [form, onSaveSuccess]);

  return (
    <Form
      form={form}
      initialValues={{
        firstName: authedUser.firstName,
        lastName: authedUser.lastName,
      }}
    >
      <label className="block mb-2">
        First name {edit && <b className="text-red-400">*</b>}
      </label>
      <Form.Item name="firstName" rules={UserFormRules.firstName}>
        <Input disabled={!edit} placeholder="First name..." />
      </Form.Item>
      <label className="block mb-2">
        Last name {edit && <b className="text-red-400">*</b>}
      </label>
      <Form.Item name="lastName" rules={UserFormRules.lastName}>
        <Input disabled={!edit} placeholder="Last name..." />
      </Form.Item>
      <Form.Item>
        <ProfileActionButtonGroup
          edit={edit}
          editBtnTitle="Edit first & last name"
          onSave={() => saveFlName()}
          onCancel={() => setEdit(false)}
          onEdit={() => setEdit(true)}
        />
      </Form.Item>
    </Form>
  );
}

import { Form, Input, notification } from "antd";
import React, { useCallback, useState } from "react";
import { IUser } from "../../shared/entities/IUser";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { UserFormRules } from "../user/UserFormRules";
import { UserService } from "../user/UserService";
import { ProfileActionButtonGroup } from "./ProfileActionButtonGroup";

interface ITeacherProfileEditFormProps {
  authedUser: IUser;
  onSaveSuccess: (payload: any) => any;
}

export function TeacherProfileEditForm(props: ITeacherProfileEditFormProps) {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);

  const { authedUser, onSaveSuccess } = props;
  const saveTeacherProfile = useCallback(async () => {
    let payload: any;
    try {
      payload = await form.validateFields();
    } catch {
      return;
    }

    try {
      await UserService.updateTeacherProfile(payload);
      setEdit(false);
      onSaveSuccess(payload);
      notification.success({
        message: "Success",
        description: "Update your teacher profile success",
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
        bio: authedUser.bio,
        introduction: authedUser.introduction,
      }}
    >
      <label className="block mb-2">Bio</label>
      <Form.Item name="bio" rules={UserFormRules.bio}>
        <Input disabled={!edit} placeholder="Bio..." />
      </Form.Item>
      <label className="block mb-2">Introduction</label>
      <Form.Item name="introduction" rules={UserFormRules.introduction}>
        <Input.TextArea rows={5} disabled={!edit} placeholder="Introduction..." />
      </Form.Item>
      <Form.Item>
        <ProfileActionButtonGroup
          edit={edit}
          editBtnTitle="Edit your teacher profile"
          onSave={() => saveTeacherProfile()}
          onCancel={() => setEdit(false)}
          onEdit={() => setEdit(true)}
        />
      </Form.Item>
    </Form>
  );
}

import { Button, Form, Input, notification } from "antd";
import React, { useCallback, useState } from "react";
import { UserRole } from "../../shared/enums/UserRole";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { RegisterFormRules } from "../auth/RegisterFormRules";
import { IAddUserWithRoleRequest } from "../user/types/AddUserWithRoleRequest";
import { UserFormRules } from "../user/UserFormRules";
import { UserService } from "../user/UserService";

export function CreateTeacherForm() {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  const submit = useCallback(async (user: IAddUserWithRoleRequest) => {
    setSubmitLoading(true);
    try {
      user.role = UserRole.TEACHER;
      await UserService.add(user);
      notification.success({
        message: "Success",
        description: "Add teacher success",
      });
      form.resetFields();
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
    setSubmitLoading(false);
  }, [form]);

  return (
    <Form form={form} onFinish={submit}>
      <label className="block mb-2">
        E-mail <b className="text-red-400">*</b>
      </label>
      <Form.Item name="email" rules={RegisterFormRules.email}>
        <Input placeholder="E-mail..." />
      </Form.Item>
      <label className="block mb-2">
        Username <b className="text-red-400">*</b>
      </label>
      <Form.Item name="username" rules={RegisterFormRules.username}>
        <Input placeholder="Username..." />
      </Form.Item>
      <label className="block mb-2">
        Password <b className="text-red-400">*</b>
      </label>
      <Form.Item name="password" rules={UserFormRules.password}>
        <Input placeholder="Password..." type="password" />
      </Form.Item>
      <label className="block mb-2">
        Confirm password <b className="text-red-400">*</b>
      </label>
      <Form.Item name="confirmPassword" rules={UserFormRules.confirmPassword}>
        <Input placeholder="Confirm password..." type="password" />
      </Form.Item>
      <label className="block mb-2">
        First name <b className="text-red-400">*</b>
      </label>
      <Form.Item name="firstName" rules={UserFormRules.firstName}>
        <Input placeholder="First name..." />
      </Form.Item>
      <label className="block mb-2">
        Last name <b className="text-red-400">*</b>
      </label>
      <Form.Item name="lastName" rules={UserFormRules.lastName}>
        <Input placeholder="Last name..." />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          shape="round"
          className="w-full"
          htmlType="submit"
          loading={submitLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

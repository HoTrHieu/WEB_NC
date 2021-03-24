import { Button, Form, Input, notification } from "antd";
import React, { useCallback, useState } from "react";
import { AuthService } from "../auth/AuthService";
import { UserFormRules } from "../user/UserFormRules";

export function ChangePasswordForm() {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);
  const submit = useCallback(async (values: any) => {
    setSubmitLoading(true);
    const success = await AuthService.changePassword(
      values.oldPassword,
      values.password
    );
    if (success) {
      form.resetFields();
      notification.success({
        message: "Success",
        description: "Update password success",
      });
    }
    setSubmitLoading(false);
  }, [form]);

  return (
    <Form form={form} onFinish={submit}>
      <label className="block mb-2">
        Old password <b className="text-red-400">*</b>
      </label>
      <Form.Item name="oldPassword" rules={UserFormRules.password}>
        <Input placeholder="Old password..." type="password" />
      </Form.Item>
      <label className="block mb-2">
        New password <b className="text-red-400">*</b>
      </label>
      <Form.Item name="password" rules={UserFormRules.password}>
        <Input placeholder="New password..." type="password" />
      </Form.Item>
      <label className="block mb-2">
        Confirm new password <b className="text-red-400">*</b>
      </label>
      <Form.Item name="confirmPassword" rules={UserFormRules.confirmPassword}>
        <Input placeholder="Confirm new password..." type="password" />
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

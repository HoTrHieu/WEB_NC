import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { useOtpSender } from "../otp/useOtpSender";
import { IAddUserRequest } from "../user/types/AddUserRequest";
import { UserFormRules } from "../user/UserFormRules";
import { AuthService } from "./AuthService";
import { RegisterFormRules } from "./RegisterFormRules";

export function RegisterForm() {
  const [form] = useForm();
  const [user, setUser] = useState<IAddUserRequest | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const history = useHistory();
  const otpSender = useOtpSender();

  const { sendOtp } = otpSender;
  const submit = useCallback(
    async (user: IAddUserRequest) => {
      setSubmitLoading(true);
      await sendOtp(user);
      setSubmitLoading(false);
      setUser(user);
    },
    [sendOtp]
  );

  const register = useCallback(async () => {
    setRegisterLoading(true);
    try {
      let request;
      try {
        request = await form.validateFields();
      } catch {
        return;
      }

      await AuthService.register(request);
      
      notification.success({
        message: "Success",
        description: "Register success, try to login your account",
      });
      history.push("/auth/login");
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
    setRegisterLoading(false);
  }, [history, form]);

  const { SendOtpButton } = otpSender;
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
      {!user && (
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
      )}
      {!!user && (
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
              onClick={() => otpSender.sendOtp(user)}
            />
            <Button
              type="primary"
              shape="round"
              className="w-full"
              onClick={() => register()}
              loading={registerLoading}
            >
              Register
            </Button>
          </Form.Item>
        </>
      )}
    </Form>
  );
}

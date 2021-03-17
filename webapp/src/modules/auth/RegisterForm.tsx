import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { NotificationUtils } from "../../shared/utils/NotificationUtils";
import { MailSenderService } from "../mail-sender/MailSenderService";
import { IAddUserRequest } from "../user/types/AddUserRequest";
import { UserFormRules } from "../user/UserFormRules";
import { AuthService } from "./AuthService";
import { RegisterFormRules } from "./RegisterFormRules";

const sendOtpWaitTimes = [0, 30, 300, 600, 1800];

export function RegisterForm() {
  const [form] = useForm();
  const [sendOtpCount, setSendOtpCount] = useState(0);
  const [sendOtpWaitTime, setSendOtpWaitTime] = useState(0);
  const [user, setUser] = useState<IAddUserRequest | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const history = useHistory();
  const intervalRef = useRef<any>();

  const sendOtp = useCallback(
    async (user: IAddUserRequest) => {
      try {
        await MailSenderService.sendOtp(user.firstName, user.email);
        setSendOtpCount(sendOtpCount + 1);
        notification.success({
          message: "Success",
          description: (
            <>
              An e-mail with OTP is sent for <b>{user.email}</b>, please check
              it
            </>
          ),
        });
      } catch (err) {
        console.error(err);
        NotificationUtils.error(err.message);
      }
    },
    [sendOtpCount]
  );

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
    try {
      let request;
      try {
        request = await form.validateFields();
      } catch {
        return;
      }

      setRegisterLoading(true);
      await AuthService.register(request);
      setRegisterLoading(false);

      notification.success({
        message: "Success",
        description: "Register success, try to login your account",
      });
      history.push("/auth/login");
    } catch (err) {
      console.error(err);
      NotificationUtils.error(err.message);
    }
  }, [history, form]);

  const removeInterval = useCallback(() => {
    if (!!intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    removeInterval();

    let totalWaitTime =
      sendOtpWaitTimes[Math.min(sendOtpCount, sendOtpWaitTimes.length - 1)];
    setSendOtpWaitTime(totalWaitTime);
    intervalRef.current = setInterval(() => {
      if (--totalWaitTime === 0) {
        removeInterval();
      }
      setSendOtpWaitTime(totalWaitTime);
    }, 1000);

    return removeInterval;
  }, [sendOtpCount, removeInterval]);

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
            <Button
              type="primary"
              shape="round"
              className="w-full mb-4"
              loading={sendOtpWaitTime > 0}
              onClick={() => sendOtp(user as any)}
            >
              {sendOtpWaitTime > 0
                ? `Please wait for ${sendOtpWaitTime} (s)...`
                : "Re-send OTP"}
            </Button>
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

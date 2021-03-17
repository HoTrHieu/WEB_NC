import { GoogleCircleFilled } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useCallback } from "react";
import { UserFormRules } from "../user/UserFormRules";
import { AuthService } from "./AuthService";
import { HOST } from "../../shared/constants/constants";
import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
interface ILoginFormProps {
  redirect?: string;
}

export function LoginForm(props: ILoginFormProps) {
  const [form] = useForm();
  const submit = useCallback(
    async (values: any) => {
      const success = await AuthService.login(values.username, values.password);
      if (success) {
        window.location.pathname = props.redirect || "/";
      }
    },
    [props.redirect]
  );
  return (
    <Form form={form} onFinish={submit}>
      <label className="block mb-2">
        Username <b className="text-red-400">*</b>
      </label>
      <Form.Item name="username" rules={UserFormRules.username}>
        <Input placeholder="Username..." />
      </Form.Item>
      <label className="block mb-2">
        Password <b className="text-red-400">*</b>
      </label>
      <Form.Item name="password" rules={UserFormRules.password}>
        <Input placeholder="Password..." type="password" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          shape="round"
          className="w-full mb-4"
          htmlType="submit"
        >
          Login
        </Button>
        <Button
          type="primary"
          shape="round"
          className="w-full"
          danger
          onClick={() =>
            (window.location.replace(HOST + ApiEndpoint.auth.loginGoogle))
          }
        >
          <GoogleCircleFilled
            className="text-xl"
            style={{ transform: "translateY(-2px)" }}
          />{" "}
          Sign-in with Google
        </Button>
      </Form.Item>
    </Form>
  );
}

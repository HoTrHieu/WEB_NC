import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router";

export function NotFoundPage() {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="Page not found"
      extra={[
        <Button
          type="primary"
          shape="round"
          key="home"
          onClick={() => history.push("/")}
        >
          Go to home page
        </Button>,
      ]}
    />
  );
}

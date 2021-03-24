import { Tabs } from "antd";
import React, { useMemo } from "react";
import { Redirect, Route, RouteComponentProps, Switch, useHistory } from "react-router";
import { AuthService } from "./AuthService";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

enum AuthTabs {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
}

export function AuthPage(props: RouteComponentProps) {
  const { location } = props;
  const history = useHistory();
  const redirect = useMemo(() => {
    if (!!location.state && typeof location.state === "object") {
      return (location.state as any)?.redirect || '/';
    }
  }, [location]);

  if (AuthService.isAuthed) {
    history.push(redirect);
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="px-10 py-5 rounded-lg shadow" style={{ width: "400px" }}>
          <Tabs
            defaultActiveKey={location.pathname}
            onChange={(pathname) => history.push({ pathname, state: { redirect } })}
          >
            <Tabs.TabPane tab="Login" key={AuthTabs.LOGIN} />
            <Tabs.TabPane tab="Register" key={AuthTabs.REGISTER} />
          </Tabs>
          <Switch>
            <Redirect exact from="/auth" to="/auth/login" />
            <Route path="/auth/login" component={LoginForm} />
            <Route path="/auth/register" component={RegisterForm} />
          </Switch>
        </div>
      </div>
    </>
  );
}

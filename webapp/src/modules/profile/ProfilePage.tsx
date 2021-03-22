import { Tabs } from "antd";
import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { ProfileEditForm } from "./ProfileEditForm";

enum ProfileTabs {
  PROFILE = "/profile",
  CHANGE_PASSWORD = "/profile/change-password",
}

export function ProfilePage(props: RouteComponentProps) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="px-10 py-5 rounded-lg shadow"
          style={{ width: "400px" }}
        >
          <Tabs
            defaultActiveKey={props.location.pathname}
            onChange={(pathname) =>
              props.history.push(pathname)
            }
          >
            <Tabs.TabPane tab="Profile" key={ProfileTabs.PROFILE} />
            <Tabs.TabPane tab="Change password" key={ProfileTabs.CHANGE_PASSWORD} />
          </Tabs>
          <Switch>
            <Route exact path="/profile" component={ProfileEditForm} />
            <Route path="/profile/change-password" component={ChangePasswordForm} />
          </Switch>
        </div>
      </div>
    </>
  );
}

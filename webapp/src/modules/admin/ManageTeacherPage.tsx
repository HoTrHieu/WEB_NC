import { Tabs } from "antd";
import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import { CreateTeacherPage } from "./CreateTeacherPage";
import { ManageTeacherListPage } from "./ManageTeacherListPage";

export function ManageTeacherPage(props: RouteComponentProps) {
  const { location } = props;
  return (
    <div>
      <Tabs
        defaultActiveKey={location.pathname}
        onChange={(pathname) => props.history.push(pathname)}
      >
        <Tabs.TabPane key="/admin/teacher/list" tab="Teacher list" />
        <Tabs.TabPane key="/admin/teacher/add" tab="Add teacher" />
      </Tabs>
      <Switch>
        <Redirect exact from="/admin/teacher" to="/admin/teacher/list" />
        <Route path="/admin/teacher/list" component={ManageTeacherListPage} />
        <Route path="/admin/teacher/add" component={CreateTeacherPage} />
      </Switch>
    </div>
  );
}

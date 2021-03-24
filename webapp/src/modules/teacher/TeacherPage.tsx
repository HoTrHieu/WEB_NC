import { Tabs } from "antd";
import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import { TeacherAddCoursePage } from "./TeacherAddCoursePage";
import { TeacherDashboardPage } from "./TeacherDashboardPage";
import { TeacherEditCoursePage } from "./TeacherEditCoursePage";

export function TeacherPage(props: RouteComponentProps) {
  const { location } = props;
  return (
    <div>
      <Tabs
        activeKey={location.pathname}
        onChange={(pathname) => props.history.push(pathname)}
      >
        <Tabs.TabPane key="/teacher/dashboard" tab="Dashboard" />
        <Tabs.TabPane key="/teacher/add-course" tab="Add course" />
      </Tabs>
      <Switch>
        <Redirect exact path="/teacher" to="/teacher/dashboard" />
        <Route path="/teacher/dashboard" component={TeacherDashboardPage} />
        <Route path="/teacher/add-course" component={TeacherAddCoursePage} />
        <Route
          path="/teacher/edit-course/:courseId"
          component={TeacherEditCoursePage}
        />
      </Switch>
    </div>
  );
}

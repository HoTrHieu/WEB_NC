import React from "react";
import {
  TeamOutlined,
  ReadFilled,
  UserOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Route, RouteComponentProps, useHistory, Switch, Redirect } from "react-router";
import { Menu } from "antd";
import { ManageCategoryPage } from "./ManageCategoryPage";
import { ManageCoursePage } from "./ManageCoursePage";
import { ManageStudentPage } from "./ManageStudentPage";
import { ManageTeacherPage } from "./ManageTeacherPage";

const TYPE_LINK = {
  TEACHER: "/admin/teacher",
  STUDENT: "/admin/student",
  CATEGORY: "/admin/category",
  COURSE: "/admin/course",
};

export function AdminPage(props: RouteComponentProps) {
  const history = useHistory();
  return (
    <div className="flex space-x-4">
      <div className="w-2/12">
        <Menu
          defaultSelectedKeys={[props.location.pathname]}
          defaultOpenKeys={["admin/students"]}
          mode="vertical-left"
          theme="light"
          onSelect={(e) => history.push(e.key as any)}
        >
          <Menu.Item key={TYPE_LINK.STUDENT} icon={<TeamOutlined />}>
            Manage Student
          </Menu.Item>
          <Menu.Item key={TYPE_LINK.TEACHER} icon={<UserOutlined />}>
            Manage Teacher
          </Menu.Item>
          <Menu.Item key={TYPE_LINK.CATEGORY} icon={<CompassOutlined />}>
            Manage Category
          </Menu.Item>
          <Menu.Item key={TYPE_LINK.COURSE} icon={<ReadFilled />}>
            Manage Course
          </Menu.Item>
        </Menu>
      </div>
      <div className="w-11/12">
        <Switch>
          <Redirect exact from="/admin" to="/admin/student" />
          <Route path="/admin/student" component={ManageStudentPage} />
          <Route path="/admin/teacher" component={ManageTeacherPage} />
          <Route path="/admin/category" component={ManageCategoryPage} />
          <Route path="/admin/course" component={ManageCoursePage} />
        </Switch>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  ReadFilled,
  UserOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Route, RouteComponentProps, useHistory, Switch } from "react-router";
import { Menu, Button } from "antd";
import { CategoryManagePage } from "./CategoryManagePage";
import { CourseManagePage } from "./CourseManagePage";
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex space-x-4">
      <div className="w-3/12">
        <Button
          type="primary"
          className="mb-5"
          onClick={() => setCollapsed(!collapsed)}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Menu
          defaultSelectedKeys={[props.location.pathname]}
          defaultOpenKeys={["admin/students"]}
          mode="inline"
          theme="dark"
          onSelect={(e) => history.push(e.key as any)}
          inlineCollapsed={collapsed}
        >
          <Menu.Item key={TYPE_LINK.STUDENT} icon={<TeamOutlined />}>
            Manage student
          </Menu.Item>
          <Menu.Item key={TYPE_LINK.TEACHER} icon={<UserOutlined />}>
            Manage teacher
          </Menu.Item>
          <Menu.Item key={TYPE_LINK.CATEGORY} icon={<CompassOutlined />}>
            Manage category
          </Menu.Item>
          <Menu.Item key={TYPE_LINK.COURSE} icon={<ReadFilled />}>
            Manage course
          </Menu.Item>
        </Menu>
      </div>
      <div className="w-9/12">
        <Switch>
          <Route path="/admin/student" component={ManageStudentPage} />
          <Route path="/admin/teacher" component={ManageTeacherPage} />
          <Route path="/admin/category" component={CategoryManagePage} />
          <Route path="/admin/course" component={CourseManagePage} />
        </Switch>
      </div>
    </div>
  );
}

import React, {useState, useEffect, useCallback} from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  ReadFilled,
  UserOutlined
} from '@ant-design/icons';
import { RouteComponentProps, useHistory } from 'react-router';
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { Menu, Button } from 'antd';

import { UserService } from '../user/UserService'
import { IContentSearchRequest } from '../user/types/SearchUserRequest';
import { UserRole } from '../../shared/enums/UserRole';
import {UserManageComponent} from './UserManageComponent';

const TYPE_LINK = {
  TEACHERS: "/admin/teachers",
  STUDENTS: "/admin/students",
  ADMIN: "/admin/admin",
  COURSES: "/admin/courses"
}

const LINK = {
  [TYPE_LINK.STUDENTS]: UserRole.NORMAL,
  [TYPE_LINK.TEACHERS]: UserRole.TEACHER,
  [TYPE_LINK.ADMIN]: UserRole.ADMIN,
  [TYPE_LINK.COURSES]: 5,
}
 
export function AdminPage(props: RouteComponentProps) {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const [req, setReq] = useState({
    page: 1,
    pageSize: 10,
    role: history.location.pathname.includes('students') ? UserRole.NORMAL : (history.location.pathname.includes('teachers') ? UserRole.TEACHER : UserRole.ADMIN)
  })

  const userList = useQuery(
    useCallback(()=> UserService.search(req), [req])
  );
  

  return (
    <div className="flex space-x-4">
      <div className="">
        <Button type="primary" onClick={()=>setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <Menu
            defaultSelectedKeys={[props.location.pathname]}
            defaultOpenKeys={['admin/students']}
            mode="inline"
            theme="dark"
            onSelect={e => {history.push(e.key as any); setReq({...req, role: LINK[e.key]} )}}
            inlineCollapsed={collapsed}
          >
            <Menu.Item key={TYPE_LINK.STUDENTS} icon={<TeamOutlined />}>
              Quản lý học viên
            </Menu.Item>
            <Menu.Item key={TYPE_LINK.TEACHERS} icon={<UserOutlined />}>
              Quản lý giảng viên
            </Menu.Item>
            <Menu.Item key={TYPE_LINK.COURSES} icon={<ReadFilled />}>
              Quản lý khóa học
            </Menu.Item>
          </Menu>
        </div>
      <div className="w-11/12">
        <UserManageComponent
          userList={userList}
        />
      </div>
    </div>
  )
}
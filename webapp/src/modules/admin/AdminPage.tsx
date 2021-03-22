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
import { Menu, Button, Table, Tag, Space } from 'antd';

import { UserService } from '../user/UserService'
import { IContentSearchRequest } from '../user/types/SearchUserRequest';

const { Column, ColumnGroup } = Table;
 
export function AdminPage(props: RouteComponentProps) {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const req = {
    page: 1,
    pageSize: 10,
  }

  // const value = UserService.search(req);
  // console.log('showvalue: ', value);

  const userList = useQuery(
    useCallback(()=> UserService.search(req), [])
  );

  console.log('showlll: ', userList);

  const data = [
    {
      id: 1,
      username: "admin",
      email: "admin@gmail.com",
      firstName: "Super",
      lastName: "Admin",
      role: 1,
      status: 1,
      createdDate: "2021-03-17T07:50:02.949Z"
    },
    {
      id: 2,
      username: "teacher1",
      email: "teacher1@gmail.com",
      firstName: "I am",
      lastName: "Teacher 1",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:02.977Z"
    },
    {
      id: 3,
      username: "student1",
      email: "student1@gmail.com",
      firstName: "I am",
      lastName: "Student 1",
      role: 3,
      status: 1,
      createdDate: "2021-03-17T07:50:02.992Z"
    },
    {
      id: 4,
      username: "Macey1",
      email: "Macey1@gmail.com",
      firstName: "Macey",
      lastName: "Von",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.006Z"
    },
    {
      id: 5,
      username: "Brannon2",
      email: "Brannon2@gmail.com",
      firstName: "Brannon",
      lastName: "Dickinson",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.017Z"
    },
    {
      id: 6,
      username: "Sage3",
      email: "Sage3@gmail.com",
      firstName: "Sage",
      lastName: "Donnelly",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.029Z"
    },
    {
      id: 7,
      username: "Lelia4",
      email: "Lelia4@gmail.com",
      firstName: "Lelia",
      lastName: "Kuphal",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.043Z"
    },
    {
      id: 8,
      username: "Jeanne5",
      email: "Jeanne5@gmail.com",
      firstName: "Jeanne",
      lastName: "Connelly",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.057Z"
    },
    {
      id: 9,
      username: "Brennan6",
      email: "Brennan6@gmail.com",
      firstName: "Brennan",
      lastName: "Anderson",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.073Z"
    },
    {
      id: 10,
      username: "Jaiden7",
      email: "Jaiden7@gmail.com",
      firstName: "Jaiden",
      lastName: "Stehr",
      role: 2,
      status: 1,
      createdDate: "2021-03-17T07:50:03.092Z"
    }
  ];
  

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
            onSelect={e => history.push(e.key as any)}
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="/admin/students" icon={<TeamOutlined />}>
              Quản lý học viên
            </Menu.Item>
            <Menu.Item key="/admin/teachers" icon={<UserOutlined />}>
              Quản lý giảng viên
            </Menu.Item>
            <Menu.Item key="/admin/courses" icon={<ReadFilled />}>
              Quản lý khóa học
            </Menu.Item>
          </Menu>
        </div>
      <div className="w-11/12">
        <Table dataSource={data}>
          
          <Column title="ID" dataIndex="id" key="id" />
          <Column title="USER NAME" dataIndex="username" key="username" />
          <Column title="FIRST NAME" dataIndex="firstName" key="firstName" />
          <Column title="LAST NAME" dataIndex="lastName" key="lastName" />
          <Column title="EMAIL" dataIndex="email" key="email" />
          <Column title="ROLE" dataIndex="role" key="role" />
          <Column title="STATUS" dataIndex="status" key="status" />
          <Column title="CREATED DATE" dataIndex="createdDate" key="createdDate" />

          {/* <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <>
                {tags.map((tag: any) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          /> */}
          {/* <Column
            title="Action"
            key="action"
            render: (_: any, record: Item) => {
              const editable = isEditing(record);
              return editable ? (
                <span>
                  <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                    Save
                  </a>
                  <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                  Edit
                </Typography.Link>
              );
            }
          /> */}
            
          
        </Table>
      </div>

      
      </div>
  )
}
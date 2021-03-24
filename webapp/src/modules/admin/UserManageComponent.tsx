import React, {useState, useEffect, useCallback} from 'react';
import { Table, Form, Switch } from 'antd';
import { UserService } from '../user/UserService'
import { EntityStatus } from '../../shared/enums/EntityStatus';

export function UserManageComponent(props: any) {
  const {userList, currentRole, handleChange} = props || {};
  const [form] = Form.useForm();
  const [pagination, setPagination] = useState({
    pageSize: userList.data.pageSize,
    page: userList.data.page,
    total: userList.data.total,
    current: userList.data.page
  })

  const changeStatus = (value: any)=> {
    const {id, status} = value;
    const newStatus = status === 1 ? EntityStatus.DISABLED : EntityStatus.ACTIVE;
    const res = UserService.updateStatus({id, newStatus})
  }

  const columns = [
    {
      title: "ID", 
      dataIndex: "id",
      editable: false,
    },
    {
      title: "USER NAME",
      dataIndex: "username",
      editable: false,
    },
    {
      title: "FIRST NAME",
      dataIndex: "firstName",
      editable: false,
    },
    {
      title: "LAST NAME",
      dataIndex: "lastName",
      editable: false,
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      editable: false,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      editable: true,
      render: (_: any, record: any) => {
        return <Switch defaultChecked={record.status === 1} onChange={() => changeStatus(record)} />
      }
    },
    {
      title: "CREATED DATE",
      dataIndex: "createdDate",
      editable: false,
    }
  ]

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const handleTableChange = (newPagination: any, filters: any, sorter: any) => {
    handleChange({
      page: newPagination.current,
      pageSize: 10,
      role: currentRole.role
    })
  };

  return (
    <Form form={form} component={false}>
      <Table 
        columns={mergedColumns}
        loading={userList.loading || !!userList.error} 
        dataSource={userList.data?.items}
        pagination={pagination}
        onChange={handleTableChange}
      />      
    </Form>

  )
}
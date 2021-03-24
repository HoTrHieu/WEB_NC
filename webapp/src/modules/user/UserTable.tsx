import React, { useCallback, useState } from "react";
import { Table } from "antd";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { UserService } from "../user/UserService";
import { UserTableColumns } from "./UserTableColumns";

interface IUserTableProps {
  filters?: any;
}

export function UserTable(props: IUserTableProps) {
  const [page, setPage] = useState(1);
  
  const { filters } = props;
  const fetchUsers = useCallback(() => {
    return UserService.search({ page, pageSize: 20, ...filters, all: true });
  }, [page, filters]);

  const usersResponse = useQuery(fetchUsers);

  return (
    <>
      <div className="mb-4">
        Total: <b>{usersResponse.data?.total || 0}</b> rows
      </div>

      <Table
        columns={UserTableColumns}
        loading={usersResponse.loading || !!usersResponse.error}
        dataSource={usersResponse.data?.items}
        pagination={{
          pageSize: 20,
          total: usersResponse.data?.total || 0,
          showSizeChanger: false,
          current: page,
          onChange: page => setPage(page)
        }}
      />
    </>
  );
}

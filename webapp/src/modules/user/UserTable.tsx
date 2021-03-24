import React, { useCallback, useState } from "react";
import { Table, Pagination } from "antd";
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
    return UserService.search({ page, pageSize: 20, ...filters });
  }, [page, filters]);

  const usersResponse = useQuery(fetchUsers);

  return (
    <>
      <div className="mb-4">
        Total: <b>{usersResponse.data?.total || 0}</b> users
      </div>

      <Table
        columns={UserTableColumns}
        loading={usersResponse.loading || !!usersResponse.error}
        dataSource={usersResponse.data?.items}
      />

      <div className="flex justify-center mt-5">
        <Pagination total={usersResponse.data?.total || 0} pageSize={50} current={page} onChange={(page) => setPage(page)} />
      </div>
    </>
  );
}

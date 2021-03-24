import { SelectProps } from "antd";
import React from "react";
import { FdmSelect } from "../../shared/components/FdmSelect";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { UserService } from "./UserService";

export function UserSelect(props: SelectProps<any>) {
  const usersResponse = useQuery(UserService.all);
  return (
    <FdmSelect
      placeholder="User..."
      loading={!usersResponse.data}
      items={usersResponse.data}
      {...props}
    />
  );
}

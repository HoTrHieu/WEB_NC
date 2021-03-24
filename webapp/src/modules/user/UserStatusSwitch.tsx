import { SwitchProps } from "antd";
import React from "react";
import { FdmStatusSwitch } from "../../shared/components/FdmStatusSwitch";
import { IUser } from "../../shared/entities/IUser";
import { UserService } from "./UserService";

interface IUserStatusSwitchProps extends SwitchProps {
  user: IUser;
}

export function UserStatusSwitch(props: IUserStatusSwitchProps) {
  const { user, ...restProps } = props;
  return (
    <FdmStatusSwitch
      id={user.id}
      status={user.status as any}
      onUpdateStatus={UserService.updateStatus}
      {...restProps}
    />
  );
}

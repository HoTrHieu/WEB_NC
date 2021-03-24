import React from "react";
import { FdmStatusSwitch } from "../../shared/components/FdmStatusSwitch";
import { IUser } from "../../shared/entities/IUser";
import { UserService } from "./UserService";

interface IUserStatusSwitchProps {
  user: IUser;
}

export function UserStatusSwitch(props: IUserStatusSwitchProps) {
  return (
    <FdmStatusSwitch
      id={props.user.id}
      status={props.user.status as any}
      onUpdateStatus={UserService.updateStatus}
    />
  );
}

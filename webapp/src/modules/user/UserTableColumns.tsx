import { IUser } from "../../shared/entities/IUser";
import { UserStatusSwitch } from "./UserStatusSwitch";

export const UserTableColumns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "User name",
    dataIndex: "username",
  },
  {
    title: "First name",
    dataIndex: "firstName",
  },
  {
    title: "Last name",
    dataIndex: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Created date",
    dataIndex: "createdDate",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    editable: true,
    render: (_: any, record: IUser) => {
      return <UserStatusSwitch user={record} />;
    },
  },
];

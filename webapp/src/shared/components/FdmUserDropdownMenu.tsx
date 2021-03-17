import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { AuthService } from '../../modules/auth/AuthService';
import { IUser } from '../entities/IUser';

interface IFdmUserDropdownMenuProps {
  user?: IUser;
}

export function FdmUserDropdownMenu(props: IFdmUserDropdownMenuProps) {
  return (
    <Menu>
      <Menu.Item>
        <div className="flex items-center">
          <UserOutlined /> Profile
        </div>
      </Menu.Item>
      <Menu.Item onClick={() => AuthService.logout()}>
        <div className="flex items-center text-red-400">
          <PoweroffOutlined /> Logout
        </div>
      </Menu.Item>
    </Menu>
  )
}
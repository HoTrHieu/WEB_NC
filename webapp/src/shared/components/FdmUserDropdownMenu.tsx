import { HeartOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../../modules/auth/AuthService';
import { IUser } from '../entities/IUser';

interface IFdmUserDropdownMenuProps {
  user?: IUser;
}

export function FdmUserDropdownMenu(props: IFdmUserDropdownMenuProps) {
  return (
    <Menu>
      <Menu.Item>
        <Link to="/profile" className="flex items-center">
          <UserOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <div className="flex items-center">
          <HeartOutlined /> Watch list
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
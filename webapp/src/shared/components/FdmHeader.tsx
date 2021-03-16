import React, { useMemo } from 'react';
import { Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';
import { CategoryService } from '../../modules/category/CategoryService';
import { useQuery } from '../hooks/useQuery.hook';

import fdmLogo from '6../../images/logo/fdm-white.svg';
import { FdmCategoryMenu } from './FdmCategoryMenu';

export function FdmHeader() {
  const categories = useQuery(CategoryService.all);
  const menu = useMemo(() => {
    if (!!categories.data) {
      return <FdmCategoryMenu categories={categories.data} />
    }
    return <>Loading...</>;
  }, [categories.data]);

  return (
    <div className="flex">
      <div className="flex">
        <div className="">
          <div className="w-16 h-16 bg-blue-400">
            <img src={fdmLogo} />
          </div>
          <b>Fademy</b>
        </div>
        <div>
          <NavLink to="/" activeClassName="text-gray-700" className="text-gray-400 hover:text-gray-700">Home</NavLink>
          <Dropdown overlay={menu}>
            <div className="text-gray-400 hover:text-gray-700">Categories</div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
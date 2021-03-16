import React from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router';
import { ICategory } from '../entities/ICategory';

interface IFdmCategoryMenuProps {
  categories: ICategory[];
}

export function FdmCategoryMenu(props: IFdmCategoryMenuProps) {
  const history = useHistory();
  
  function navigate(category: ICategory) {
    history.push(`/courses/${category.id}`);
  }

  return (
    <Menu>
      {props.categories.map(parent => (
        <Menu.SubMenu key={parent.id} title={parent.name} onTitleClick={() => navigate(parent)}>
          {parent.children.map(child => (
            <Menu.Item key={child.id} onClick={() => navigate(child)}>{child.name}</Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}
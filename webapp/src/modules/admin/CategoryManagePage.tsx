import { Tabs } from 'antd';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { CategoryManageListPage } from './CategoryManageListPage';
import { CreateCategoryPage } from './CreateCategoryPage';
import { UpdateCategoryPage } from './UpdateCategoryPage';

export function CategoryManagePage(props: RouteComponentProps) {
  return (
    <div>
      <Tabs defaultActiveKey={props.location.pathname}>
        <Tabs.TabPane key="/admin/category/list" tab="Category list" />
        <Tabs.TabPane key="/admin/category/add" tab="Add category" />
      </Tabs>
      <Switch>
        <Route path="/admin/category/list" component={CategoryManageListPage} />
        <Route path="/admin/category/add" component={CreateCategoryPage} />
        <Route path="/admin/category/update/:categoryId" component={UpdateCategoryPage} />
      </Switch>
    </div>
  )
}
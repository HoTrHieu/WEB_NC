import { Tabs } from "antd";
import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import { ManageCategoryListPage } from "./ManageCategoryListPage";
import { CreateCategoryPage } from "./CreateCategoryPage";
import { UpdateCategoryPage } from "./UpdateCategoryPage";

export function ManageCategoryPage(props: RouteComponentProps) {
  return (
    <div>
      <Tabs
        defaultActiveKey={props.location.pathname}
        onChange={(pathname) => props.history.push(pathname)}
      >
        <Tabs.TabPane key="/admin/category/list" tab="Category list" />
        <Tabs.TabPane key="/admin/category/add" tab="Add category" />
      </Tabs>
      <Switch>
        <Redirect exact from="/admin/category" to="/admin/category/list" />
        <Route path="/admin/category/list" component={ManageCategoryListPage} />
        <Route path="/admin/category/add" component={CreateCategoryPage} />
        <Route
          path="/admin/category/update/:categoryId"
          component={UpdateCategoryPage}
        />
      </Switch>
    </div>
  );
}

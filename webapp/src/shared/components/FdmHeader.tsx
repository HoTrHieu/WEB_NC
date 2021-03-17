import React, { useMemo } from "react";
import { Button, Dropdown, Input } from "antd";
import { Link, NavLink } from "react-router-dom";
import { CategoryService } from "../../modules/category/CategoryService";
import { useQuery } from "../hooks/useQuery.hook";

import { FdmCategoryMenu } from "./FdmCategoryMenu";
import { FdmLogo } from "./FdmLogo";
import { CaretDownOutlined, LoadingOutlined } from "@ant-design/icons";
import { useAuthedUser } from "../hooks/useAuthedUser";
import { AuthService } from "../../modules/auth/AuthService";
import { FdmUserDropdownMenu } from "./FdmUserDropdownMenu";

export function FdmHeader() {
  const categories = useQuery(CategoryService.all);
  const categoryMenu = useMemo(() => {
    if (!!categories.data) {
      return <FdmCategoryMenu categories={categories.data} />;
    }
    return <>Loading...</>;
  }, [categories.data]);

  const { authedUser, loading } = useAuthedUser();
  const userDropdownMenu = useMemo(() => {
    return <FdmUserDropdownMenu user={authedUser as any} />;
  }, [authedUser]);

  return (
    <div
      className="w-full shadow h-16 fixed flex justify-center top-0 bg-white"
      style={{ zIndex: 10 }}
    >
      <div className="container flex items-center">
        <div className="flex w-full items-center">
          <Link to="/" className="flex items-center">
            <FdmLogo />
            <b className="ml-2 text-blue-400 text-xl">Fademy</b>
          </Link>
          <NavLink
            to="/"
            exact
            className="text-gray-400 hover:text-gray-700 mx-4"
            activeClassName="text-gray-700"
          >
            Home
          </NavLink>
          <Dropdown overlay={categoryMenu} overlayClassName="shadow">
            <div className="cursor-pointer text-gray-400 hover:text-gray-700 flex items-center">
              Categories <CaretDownOutlined />
            </div>
          </Dropdown>
        </div>

        <div className="ml-auto flex items-center">
          <Input.Search
            placeholder="Search courses..."
            className="rounded mr-4"
            style={{ width: "250px" }}
          />
          {AuthService.isAuthed ? (
            <Dropdown overlay={userDropdownMenu as any} overlayClassName="shadow">
              {loading ? (
                <>
                  <LoadingOutlined className="mr-1" /> Loading...
                </>
              ) : (
                <Button type="primary" shape="round">
                  <div className="flex items-center">
                    <span className="mr-2">{authedUser?.username}</span>{" "}
                    <CaretDownOutlined />
                  </div>
                </Button>
              )}
            </Dropdown>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="text-gray-400 hover:text-gray-700 mr-4"
                activeClassName="text-gray-700"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="text-gray-400 hover:text-gray-700"
              >
                <Button shape="round" type="primary">
                  Get started
                </Button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

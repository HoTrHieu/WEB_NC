import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { AuthService } from "../../modules/auth/AuthService";
import { UserRole } from "../enums/UserRole";
import { useAuthedUser } from "../hooks/useAuthedUser";
import { FdmLoading } from "./FdmLoading";

interface Props extends RouteProps {
  component: any;
  roles?: UserRole[];
}

export const AuthedRoute: React.FC<Props> = ({
  component: Component,
  roles,
  ...rest
}) => {
  const { authedUser, loading } = useAuthedUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <FdmLoading />;
        }

        if (AuthService.isAuthed && (!roles || roles.includes((authedUser as any).role))) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{ pathname: "/auth/login", state: { redirect: props.location.pathname } }}
          />
        );
      }}
    />
  );
};

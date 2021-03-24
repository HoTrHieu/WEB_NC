import React, { useCallback, useMemo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import * as pathToRegexp from 'path-to-regexp';

interface IFdmNavLinkProps extends React.PropsWithoutRef<NavLinkProps<any>> {
  path: string;
}

export function FdmNavLink(props: IFdmNavLinkProps) {
  const regexp = useMemo(() => {
    return pathToRegexp.pathToRegexp(props.path);
  }, [props.path]);

  const isActive = useCallback((match, location) => {
    return regexp.test(location.pathname);
  }, [regexp]);

  return <NavLink {...props} isActive={isActive} />
}
import React from "react";

import fdmLogo from "../../images/logo/fdm-white.svg";

export function FdmLogo({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div
      className={"w-10 h-10 bg-blue-400 p-2 rounded " + (className || "")}
      {...props}
    >
      <img src={fdmLogo} alt="Fademy logo" />
    </div>
  );
}

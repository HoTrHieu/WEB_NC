import { SwitchProps } from "antd";
import React from "react";
import { FdmStatusSwitch } from "../../shared/components/FdmStatusSwitch";
import { ICategory } from "../../shared/entities/ICategory";
import { CategoryService } from "./CategoryService";

interface ICategoryStatusSwitchProps extends SwitchProps {
  category: ICategory;
}

export function CategoryStatusSwitch(props: ICategoryStatusSwitchProps) {
  const { category, ...restProps } = props;
  return (
    <FdmStatusSwitch
      id={category.id}
      status={category.status as any}
      onUpdateStatus={CategoryService.updateStatus}
      {...restProps}
    />
  );
}

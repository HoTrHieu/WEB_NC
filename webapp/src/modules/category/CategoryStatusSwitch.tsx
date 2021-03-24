import React from "react";
import { FdmStatusSwitch } from "../../shared/components/FdmStatusSwitch";
import { ICategory } from "../../shared/entities/ICategory";
import { CategoryService } from "./CategoryService";

interface ICategoryStatusSwitchProps {
  category: ICategory;
}

export function CategoryStatusSwitch(props: ICategoryStatusSwitchProps) {
  return (
    <FdmStatusSwitch
      id={props.category.id}
      status={props.category.status as any}
      onUpdateStatus={CategoryService.updateStatus}
    />
  );
}

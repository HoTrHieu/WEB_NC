import { SelectProps } from "antd";
import React, { useMemo } from "react";
import { FdmSelect } from "../../shared/components/FdmSelect";
import { ICategory } from "../../shared/entities/ICategory";
import { useQuery } from "../../shared/hooks/useQuery.hook";
import { ArrayUtils } from "../../shared/utils/ArrayUtils";
import { CategoryService } from "./CategoryService";

interface ICategorySelectProps extends SelectProps<any> {
  onlyChildren?: boolean;
  onlyParent?: boolean;
}

export function CategorySelect(props: ICategorySelectProps) {
  const { onlyChildren, onlyParent, ...restProps } = props;
  const categoryResponse = useQuery(CategoryService.all);
  const categories = useMemo(() => {
    if (categoryResponse.data) {
      if (onlyParent) {
        return categoryResponse.data;
      }
      let categories = categoryResponse.data.map((c: ICategory) => c.children);
      if (!onlyChildren) {
        categories = [categoryResponse.data, ...categories];
      }
      return ArrayUtils.flatMap(categories);
    }
    return categoryResponse.data;
  }, [categoryResponse.data, onlyChildren, onlyParent]);
  return <FdmSelect placeholder="Category..." items={categories} {...restProps} />;
}

import { SelectProps } from 'antd';
import React, { useMemo } from 'react';
import { FdmSelect } from '../../shared/components/FdmSelect';
import { ICategory } from '../../shared/entities/ICategory';
import { useQuery } from '../../shared/hooks/useQuery.hook';
import { ArrayUtils } from '../../shared/utils/ArrayUtils';
import { CategoryService } from './CategoryService';

export function CategorySelect(props: SelectProps<any>) {
  const categoryResponse = useQuery(CategoryService.all);
  const categories = useMemo(() => {
    if (categoryResponse.data) {
      return ArrayUtils.flatMap([
        categoryResponse.data,
        ...categoryResponse.data.map((c: ICategory) => c.children)
      ]);
    }
    return categoryResponse.data;
  }, [categoryResponse.data]);
  return (
    <FdmSelect placeholder="Category..." items={categories} {...props} />
  )
}
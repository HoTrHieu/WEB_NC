import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { FdmLoading } from '../../shared/components/FdmLoading';
import { useQuery } from '../../shared/hooks/useQuery.hook';
import { CategoryForm } from '../category/CategoryForm';
import { CategoryService } from '../category/CategoryService';

export function UpdateCategoryPage(props: RouteComponentProps) {
  const categoryId = Number((props.match.params as any).categoryId);
  const fetchCategory = useCallback(() => {
    return CategoryService.findOne(categoryId);
  }, [categoryId]);
  const categoryResponse = useQuery(fetchCategory);

  if (!categoryResponse.data) {
    return (
      <div className="flex justify-center">
        <FdmLoading />
      </div>
    )
  }

  return (
    <div>
      <CategoryForm category={categoryResponse.data} />
    </div>
  )
}
import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { CourseList } from './CourseList';
import { CourseService } from './CourseService';
import { IContentSearchRequest } from './types/ContentSearchRequest';

export function CourseListPage(props: RouteComponentProps) {
  const { categoryId } = props.match.params as any;
  
  const fetchSource = useCallback((req: IContentSearchRequest) => {
    return CourseService.search({
      ...req,
      categoryIds: [categoryId]
    });
  }, [categoryId]);

  return (
    <div>
      <CourseList fetchSource={fetchSource} />
    </div>
  )
}
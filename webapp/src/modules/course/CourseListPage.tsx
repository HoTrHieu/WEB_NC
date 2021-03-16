import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from '../../shared/hooks/useQuery.hook';
import { CourseList } from './CourseList';
import { CourseService } from './CourseService';

export function CourseListPage(props: RouteComponentProps) {
  const { categoryId } = props.match.params as any;
  
  const fetchSource = useCallback(() => {
    return CourseService.search({
      categoryIds: [categoryId] as any,
      page: 1,
      pageSize: 50,
    });
  }, [categoryId]);

  const courses = useQuery(fetchSource);
  return (
    <div>
      <CourseList pagingResponse={courses.data} />
    </div>
  )
}
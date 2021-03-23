import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { FdmLoading } from '../../shared/components/FdmLoading';
import { useQuery } from '../../shared/hooks/useQuery.hook';
import { CourseEditForm } from '../course/CourseEditForm';
import { CourseService } from '../course/CourseService';

export function TeacherEditCoursePage(props: RouteComponentProps) {
  const courseId = Number((props.match.params as any).courseId);
  const fetchCourse = useCallback(() => {
    return CourseService.getDetail(courseId);
  }, [courseId]);
  const courseResponse = useQuery(fetchCourse);

  if (courseResponse.loading || !!courseResponse.error || !courseResponse.data) {
    return (
      <div className="flex justify-center items-center">
        <FdmLoading />
      </div>
    )
  }

  return (
    <div>
      <CourseEditForm course={courseResponse.data} />
    </div>
  )
}
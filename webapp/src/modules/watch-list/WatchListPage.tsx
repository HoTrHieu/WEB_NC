import React, { useCallback } from 'react';
import { CourseList } from '../course/CourseList';
import { CourseService } from '../course/CourseService';
import { ICourseSearchRequest } from '../course/types/CourseSearchRequest';

export function WatchListPage() {
  const fetchSource = useCallback((request: ICourseSearchRequest) => {
    return CourseService.search({
      ...request,
      onlyWatchList: true
    })
  }, []);
  return (
    <div>
      <CourseList fetchSource={fetchSource} />
    </div>
  )
}
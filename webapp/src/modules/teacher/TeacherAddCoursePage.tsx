import React from 'react';
import { RouteComponentProps } from 'react-router';
import { CourseEditForm } from '../course/CourseEditForm';

export function TeacherAddCoursePage(props: RouteComponentProps) {
  return (
    <div>
      <CourseEditForm />
    </div>
  )
}
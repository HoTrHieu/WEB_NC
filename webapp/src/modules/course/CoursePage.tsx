import React from 'react';
import { Route, Switch } from 'react-router';
import { CourseDetail } from './CourseDetail';
import { CourseListPage } from './CourseListPage';

export function CoursePage() {
  return (
    <Switch>
      <Route path="/courses/:categoryId" component={CourseListPage} />
      <Route path="/courses/detail/:courseId" component={CourseDetail} />
    </Switch>
  )
}
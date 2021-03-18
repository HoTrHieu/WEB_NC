import React from 'react';
import { Route, Switch } from 'react-router';
import { CourseDetailPage } from './CourseDetailPage';
import { CourseListPage } from './CourseListPage';

export function CoursePage() {
  return (
    <Switch>
      <Route path="/courses/detail/:courseId" component={CourseDetailPage} />
      <Route path="/courses/:categoryId" component={CourseListPage} />
    </Switch>
  )
}
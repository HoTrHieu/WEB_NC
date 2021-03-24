import React from 'react';
import { Route, Switch } from 'react-router';
import { CourseDetailPage } from './CourseDetailPage';
import { CourseListOfCreator } from './CourseListOfCreator';
import { CourseListPage } from './CourseListPage';
import { SaveCourseResult } from './SaveCourseResult';

export function CoursePage() {
  return (
    <Switch>
      <Route path="/courses/detail/:courseId" component={CourseDetailPage} />
      <Route path="/courses/creator/:creatorId" component={CourseListOfCreator} />
      <Route path="/courses/save-result/:courseId" component={SaveCourseResult} />
      <Route path="/courses/:categoryId" component={CourseListPage} />
    </Switch>
  )
}
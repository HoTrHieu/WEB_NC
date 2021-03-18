import React from 'react';
import { Route, Switch } from 'react-router';
import { AdminPage } from './modules/admin/AdminPage';
import { AuthPage } from './modules/auth/AuthPage';
import { CoursePage } from './modules/course/CoursePage';
import { HomePage } from './modules/home/HomePage';
import { ProfilePage } from './modules/profile/ProfilePage';
import { TeacherPage } from './modules/teacher/TeacherPage';
import { WatchListPage } from './modules/watch-list/WatchListPage';

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/courses" component={CoursePage} />
      <Route path="/teacher" component={TeacherPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/watch-list" component={WatchListPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  )
}
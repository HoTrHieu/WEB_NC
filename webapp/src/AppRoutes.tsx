import React from "react";
import { Route, Switch } from "react-router";
import { AdminPage } from "./modules/admin/AdminPage";
import { AuthPage } from "./modules/auth/AuthPage";
import { CoursePage } from "./modules/course/CoursePage";
import { EnrollmentPage } from "./modules/enrollment/EnrollmentPage";
import { HomePage } from "./modules/home/HomePage";
import { ProfilePage } from "./modules/profile/ProfilePage";
import { TeacherPage } from "./modules/teacher/TeacherPage";
import { WatchListPage } from "./modules/watch-list/WatchListPage";
import { FdmAuthedRoute } from "./shared/components/FdmAuthedRoute";
import { UserRole } from "./shared/enums/UserRole";
import { NotFoundPage } from "./shared/pages/NotFound.page";

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/courses" component={CoursePage} />
      <FdmAuthedRoute
        path="/teacher"
        roles={[UserRole.TEACHER]}
        component={TeacherPage}
      />
      <FdmAuthedRoute path="/profile" component={ProfilePage} />
      <FdmAuthedRoute path="/watch-list" component={WatchListPage} />
      <FdmAuthedRoute path="/enrollment" component={EnrollmentPage} />
      <FdmAuthedRoute
        path="/admin"
        roles={[UserRole.ADMIN]}
        component={AdminPage}
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

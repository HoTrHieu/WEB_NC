import * as React from "react";
import { Route, Switch, withRouter } from "react-router";
import { 
  Home,
  Login,
  Signup,
  ListCourse,
  Profile,
  DetailCourse,
  StudentCourse
} from "./modules/pages";
import { Layout } from './modules/components';

const AppRouting = (props) => {
  const render = () => {
    return (
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/list-course" component={ListCourse} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/detail-course" component={DetailCourse} />
          <Route exact path="/student-course" component={StudentCourse} />

        </Switch>
      </Layout>
    );
  };

  return render();
};

export default withRouter(AppRouting);

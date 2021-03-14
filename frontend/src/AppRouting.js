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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/list-course" component={ListCourse}/>
          <Route path="/profile" component={Profile} />
          <Route path="/detail-course" component={DetailCourse} />
          <Route path="/student-course" component={StudentCourse} />
        </Switch>
      </Layout>
    );
  };

  return render();
};

export default withRouter(AppRouting);

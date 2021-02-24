import * as React from "react";
import { Route, Switch, withRouter } from "react-router";
import { 
  Home,
  Login,
  Signup
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
        </Switch>
      </Layout>
    );
  };

  return render();
};

export default withRouter(AppRouting);

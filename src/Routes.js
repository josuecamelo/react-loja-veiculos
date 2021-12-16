import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Auth = lazy(() => import("./views/auth"));
const Register = lazy(() => import("./views/register"));
const Vehicles = lazy(() => import("./views/vehicles"));
const VehicleEdit = lazy(() => import("./views/vehicles/edit"));
/*const Pay = lazy(() => import('./views/pay'))
const Transactions = lazy(() => import('./views/transactions'))
const TransactionShow = lazy(() => import('./views/transactions/show'))
const Steps = lazy(() => import('./views/steps'))*/

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center mt-5 pt-5">
          {" "}
          <CircularProgress />{" "}
        </div>
      }
    >
      <Switch>
        <Route exact path="/vehicles/:id/edit" component={VehicleEdit} />
        <Route exact path="/vehicles/create" component={VehicleEdit} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Auth} />
        <Route exact path="/" component={Auth} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

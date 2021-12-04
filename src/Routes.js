import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Auth = lazy(() => import('./views/auth'));
const Register = lazy(() => import('./views/register'))
/*const Vehicles = lazy(() => import('./view/vehicles'))
const VehicleEdit = lazy(() => import('./view/vehicles/edit'))
const Pay = lazy(() => import('./view/pay'))
const Transactions = lazy(() => import('./view/transactions'))
const TransactionShow = lazy(() => import('./view/transactions/show'))
const Steps = lazy(() => import('./view/steps'))*/

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
        <Route exact path="/vehicles" component={ () => {return (<h1>Veículos</h1>)}} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Auth} />
        <Route exact path="/" component={Auth} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

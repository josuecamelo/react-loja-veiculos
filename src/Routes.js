import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Auth from "./views/auth";

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
        <Route exact path="/login" component={Auth} />
        <Route exact path="/" component={Auth} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

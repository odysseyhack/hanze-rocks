/**
 *
 */
import React from "react";
import {Redirect, Route, Switch} from "react-router";

import PrivateRoute from "./privateRoute";
import GuestRoute from "./guestRoute";
import Login from "../../../resources/views/components/pages/Login";
import Dashboard from "../../../resources/views/components/pages/Dashboard";

export const routes =
    <Switch>
        <GuestRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <Redirect exact from="/" to="/login" />
    </Switch>;
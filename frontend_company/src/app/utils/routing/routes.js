/**
 *
 */
import React from "react";
import {Redirect, Route, Switch} from "react-router";

import PrivateRoute from "./privateRoute";
import GuestRoute from "./guestRoute";
import Login from "../../../resources/views/components/pages/Login";
import CmrPage from "../../../resources/views/components/pages/CmrPage";

export const routes =
    <Switch>
        <GuestRoute exact path="/" component={Login} />
        <Route exact path="/cmr" component={CmrPage} />
    </Switch>;
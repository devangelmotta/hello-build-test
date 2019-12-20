import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { getStatusSession } from "./statusSession";

export const RouteProtected = (props) => {
    var { path, component } = props;
    var statusSession = getStatusSession();

    if (statusSession) return <Route exact path={path} component={component} />;
    return <Redirect exact to="/signin" />
}
import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthorize from "../utils/IsAuthorize";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthorize() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoutes;

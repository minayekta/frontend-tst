import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
// import { checkAuth } from "../Helper/utility";
import Dashboard from "./Dashboard";

const UserLayout = ({ component: Component, ...rest }) => {
  let history = useHistory();
  // useEffect(() => {
  //   let isAuth = checkAuth();
  //   if (!isAuth) history.push("/login");
  // }, []);
  return (
    <Route
      {...rest}
      render={(props) => (
        <Dashboard>
          <Component {...props} />
        </Dashboard>
      )}
    />
  );
};

export default UserLayout;

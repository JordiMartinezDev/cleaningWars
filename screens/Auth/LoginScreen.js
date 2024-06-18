import { useSelector } from "react-redux";
import NotLoggedIn from "../../navigators/NotLoggedIn";
import React from "react";
import LoggedInAppNavigator from "../../navigators/LoggedInAppNavigator";

const LoginScreen = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.userIsAuthenticated
  ); // This has to be dynamically managed by Context

  return (
    <>{isUserAuthenticated ? <LoggedInAppNavigator /> : <NotLoggedIn />}</>
  );
};

export default LoginScreen;

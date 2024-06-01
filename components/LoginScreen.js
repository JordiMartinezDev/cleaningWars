import { useSelector } from "react-redux";
import NotLoggedIn from "../screens/Auth/NotLoggedIn";
import LoggedIn from "../screens/LoggedIn";
import React from "react";

const LoginScreen = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.userIsAuthenticated
  ); // This has to be dynamically managed by Context

  return <>{isUserAuthenticated ? <LoggedIn /> : <NotLoggedIn />}</>;
};

export default LoginScreen;

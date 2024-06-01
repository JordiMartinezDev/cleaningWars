import { View, Text, Button } from "react-native";
import React from "react";
import navigation, { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { authenticated } from "../../context/redux/slicers/authSlicer";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function showSignUpScreen() {
    navigation.replace("SignUpScreen");
  }
  function loginAttempt() {
    const mockAuth = true;

    if (mockAuth) {
      dispatch(authenticated("2"));
    }
  }

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={loginAttempt}></Button>
      <Button title="Sign up" onPress={showSignUpScreen}></Button>
    </View>
  );
};

export default Login;

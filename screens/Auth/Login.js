import { View, Text, Button } from "react-native";
import React from "react";
import navigation, { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  function showSignUpScreen() {
    navigation.replace("SignUpScreen");
  }
  function loginAttempt() {
    // Change context isUserAuthenticated
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

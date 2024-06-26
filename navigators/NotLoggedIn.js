import { View, Text } from "react-native";
import React from "react";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const NotLoggedIn = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default NotLoggedIn;

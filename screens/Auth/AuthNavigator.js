import { View, Text } from "react-native";
import React from "react";
import Login from "./Login";
import SignUp from "../Auth/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

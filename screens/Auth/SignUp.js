import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  function showLoginScreen() {
    navigation.replace("LoginScreen");
  }
  return (
    <View>
      <Text>SignUp</Text>
      <Button title="Login" onPress={showLoginScreen}></Button>
    </View>
  );
};

export default SignUp;

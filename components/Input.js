import { View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({ title, textInputConfig }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;

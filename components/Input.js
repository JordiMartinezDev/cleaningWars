import { View, Text, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Input = ({ textInputConfig }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  title: {
    fontSize: 12,
    marginBottom: 4,
  },
  text: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
  },
});

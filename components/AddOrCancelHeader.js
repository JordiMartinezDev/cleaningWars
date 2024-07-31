import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";

const AddOrCancelHeader = () => {
  return (
    <View style={styles.container}>
      <CancelButton />
      <Text style={styles.text}>Add new</Text>
      <SaveButton />
    </View>
  );
};

export default AddOrCancelHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const AddTask = ({ navigation }) => {
  return (
    <View style={styles.modalContainer}>
      <Text></Text>
      <Text style={{ fontSize: 30 }}>This is a modal!!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismisss" />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formField: {
    backgroundColor: "white",
  },
});

export default AddTask;

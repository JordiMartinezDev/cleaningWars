import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const AddOrCancelHeader = ({ goBack }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()}>
        <View style={styles.button}>
          <Text style={{ color: "red", fontSize: 16 }}>Cancel</Text>
        </View>
      </Pressable>
      <Text style={styles.text}>Add new</Text>
      <Pressable onPress={() => goBack()}>
        <View style={styles.button}>
          <Text style={{ color: "gray", fontSize: 16 }}>Save</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default AddOrCancelHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    marginHorizontal: 16,
    padding: 8,
  },
});

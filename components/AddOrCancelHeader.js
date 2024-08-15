import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddOrCancelHeader = ({ goBack, title }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="red" />
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      {/* <Text style={styles.title}>{title}</Text> */}
    </View>
  );
};

export default AddOrCancelHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
  },
  title: {
    backgroundColor: "yellow",

    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  backButtonText: {
    color: "red",
    fontSize: 16,
    marginLeft: 8,
  },
});

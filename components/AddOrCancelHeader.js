import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const screenWidth = Dimensions.get("screen").width;

const AddOrCancelHeader = ({ goBack, title }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="red" />
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AddOrCancelHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "transparent",

    position: "relative", // Ensure positioning context for absolute positioning
    width: screenWidth, // Ensure container is full width of the screen
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    top: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    zIndex: 1, // Ensure the back button is above other elements
  },
  backButtonText: {
    color: "red",
    fontSize: 16,
    marginLeft: 8,
  },
});

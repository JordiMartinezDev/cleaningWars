import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import Color from "color"; // Import the color library

const CustomButton = ({ text, onPress, bgColor }) => {
  // Calculate the pressed background color dynamically
  const getButtonStyles = (bgColor) => {
    const baseColor = bgColor || "#007AFF";
    const darkenedColor = Color(baseColor).darken(0.2).hex(); // Darken by 20%

    return {
      button: {
        backgroundColor: baseColor,
      },
      buttonPressed: {
        backgroundColor: darkenedColor,
      },
    };
  };

  const { button, buttonPressed } = getButtonStyles(bgColor);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, button, pressed && buttonPressed]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "90%", // Make the button wider, adjust as needed
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CustomButton;

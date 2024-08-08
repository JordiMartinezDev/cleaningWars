import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ text, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%", // Make the button wider, adjust as needed
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF", // iOS blue button color
    margin: 16,
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
  buttonPressed: {
    backgroundColor: "#005BBB", // Darker blue when pressed
  },
});

export default CustomButton;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ChartTimeSelector = ({ onSelect, selectedTime }) => {
  const timeFrames = ["Weekly", "Monthly", "Yearly"];

  return (
    <View style={styles.container}>
      {timeFrames.map((time) => (
        <TouchableOpacity
          key={time}
          onPress={() => onSelect(time)}
          style={[
            styles.timeOption,
            selectedTime === time && styles.selectedOption,
          ]}
        >
          <Text
            style={[
              styles.timeOptionText,
              selectedTime === time && styles.selectedOptionText,
            ]}
          >
            {time}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 4,
    elevation: 2, // Shadow effect for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  timeOption: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
  },
  selectedOption: {
    backgroundColor: "#177AD5",
  },
  timeOptionText: {
    fontSize: 16,
    color: "#666",
  },
  selectedOptionText: {
    color: "#fff",
  },
});

export default ChartTimeSelector;

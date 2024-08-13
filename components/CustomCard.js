import React from "react";
import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import CustomIcon from "./CustomIcon";

const CustomCard = ({ taskName, icon, score, user, bgColor, onPress }) => {
  return (
    <View style={styles.card}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.contentContainer, bgColor]}>
          <View style={styles.iconContainer}>
            <CustomIcon icon={icon} size={48} color="#555" />
          </View>

          <View style={styles.separator} />

          <View style={styles.infoContainer}>
            <Text style={styles.taskName}>{taskName}</Text>
            <Text style={styles.user}>By: {user ? user : "User"}</Text>
          </View>

          <Text style={styles.score}>{score}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconContainer: {
    width: 48, // Fixed width to ensure alignment
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16, // Space between icon and separator
  },
  separator: {
    width: 1,
    height: "100%", // Full height of the content
    backgroundColor: "#333",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16, // Ensure consistent padding
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  user: {
    fontSize: 14,
    color: "#555",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#555",
    marginLeft: 16, // Space between info container and score
  },
  pressed: {
    backgroundColor: "#e6e6e6",
  },
});

export default CustomCard;

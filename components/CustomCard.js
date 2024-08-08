import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const CustomCard = ({ taskName, icon, score, user, color }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Define what should happen when the card is pressed
    // For example, navigate to a detailed view or show more information
    // navigation.navigate("TaskDetail", { taskName, icon, score, user });
  };

  return (
    <View style={styles.card} onTouchEnd={handlePress}>
      <View style={styles.contentContainer}>
        <FontAwesome5 name={icon} size={48} color={color} style={styles.icon} />
        <View style={styles.separator} />
        <View style={styles.infoContainer}>
          <Text style={styles.taskName}>{taskName}</Text>
          <Text style={styles.user}>By: {user}</Text>
        </View>
        <Text style={styles.score}>{score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    marginVertical: 8,
    marginHorizontal: 16,
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
    justifyContent: "space-between",
  },
  icon: {},
  separator: {
    width: 1,
    height: 48,
    backgroundColor: "#e0e0e0", // Light gray color for the separator
    marginHorizontal: 16, // Matches the marginRight of the icon
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
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
  },
});

export default CustomCard;

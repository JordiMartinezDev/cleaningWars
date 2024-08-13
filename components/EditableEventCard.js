import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import CustomIcon from "./CustomIcon";

const EditableCard = ({
  initialTask,
  initialScore,
  initialUser,
  icon,
  onSave,
}) => {
  const [taskName, setTaskName] = useState(initialTask);
  const [score, setScore] = useState(initialScore.toString());
  const [user, setUser] = useState(initialUser);

  const handleSave = () => {
    // Call the onSave callback with updated data
    onSave({ taskName, score: parseInt(score), user });
  };

  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <CustomIcon icon={icon} size={48} color="#555" />
        </View>

        <View style={styles.separator} />

        <View style={styles.infoContainer}>
          <TextInput
            style={styles.taskName}
            value={taskName}
            onChangeText={setTaskName}
            placeholder="Task Name"
            multiline={true}
          />
          <TextInput
            style={styles.user}
            value={user}
            onChangeText={setUser}
            placeholder="User"
          />
        </View>

        <TextInput
          style={styles.score}
          value={score}
          onChangeText={setScore}
          keyboardType="numeric"
          placeholder="Score"
        />
      </View>

      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
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
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  separator: {
    width: 1,
    height: "100%",
    backgroundColor: "#333",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginLeft: 16,
    width: 60, // To accommodate numeric input
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EditableCard;

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import tasks from "../../data/tasks.json";
import { Divider } from "react-native-paper";

const TaskList = () => {
  const navigation = useNavigation();

  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    // use Redux Context to set the task or perform other actions
  };

  const handleNewTask = () => {
    navigation.navigate("newTask");
  };

  return (
    <View style={styles.container}>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleTaskSelection(item)}
            style={({ pressed }) => [
              styles.itemContainer,
              pressed && styles.itemPressed,
            ]}
          >
            <View style={styles.innerContainer}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <Pressable
        onPress={handleNewTask}
        style={({ pressed }) => [
          styles.newTaskButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Add New</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Light gray background
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    flex: 1,
    height: Dimensions.get("window").height / 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  itemPressed: {
    backgroundColor: "#e6e6e6", // Slightly darker gray when pressed
  },
  innerContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333", // Darker text color for better readability
  },
  newTaskButton: {
    height: 50,
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

export default TaskList;

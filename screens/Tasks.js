import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React from "react";
import tasks from "../data/tasks.json";
import { Divider } from "react-native-paper";
import CustomCard from "../components/CustomCard";
import { useNavigation } from "@react-navigation/native";

const Tasks = () => {
  const navigation = useNavigation();

  const handleNewTask = () => {
    navigation.navigate("newTask");
  };
  const handleEditTask = (event) => {
    console.log("I want to edit task: " + event.name);
    if (!event) {
      console.error("Event data is undefined or null");
      return;
    }
    navigation.navigate("eventDetails", { event });
  };

  function editTask(event) {
    if (!event) {
      console.error("Event data is undefined or null");
      return;
    }
    navigation.navigate("eventDetails", { event });
  }
  return (
    <View style={styles.container}>
      <Divider />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <CustomCard
              taskName={item.name}
              icon={item.icon}
              score={item.points}
              bgColor={"white"}
              onPress={() => handleEditTask(item)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
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
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  itemPressed: {
    backgroundColor: "#e6e6e6", // Slightly darker gray when pressed
  },
  newTaskButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF", // iOS blue button color
    margin: 16,
    marginBottom: 32,
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

export default Tasks;

import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import tasks from "../../data/tasks.json";
import { Divider } from "react-native-paper";
import CustomCard from "../../components/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { setTask, setUser } from "../../context/redux/slicers/cardSlicer";
import { setUserName } from "../../context/redux/slicers/authSlicer";

const TaskList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log("User from Redux = " + user.userName);
  const cardProps = useSelector((state) => state.card);

  const handleTaskSelection = (task) => {
    console.log("Tapped"); // Ensure this logs
    dispatch(setTask(task)); // Update Redux state
    dispatch(setUserName({ user: user.userName })); // Correct action from authSlicer
    dispatch(setUser(user.userName));
    console.log("Task in Redux:", task); // Log the task being dispatched
    navigation.goBack(); // Go back to AddTask screen
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
          <View style={styles.itemContainer}>
            <CustomCard
              taskName={item.name}
              icon={item.icon}
              score={item.points}
              bgColor={"white"}
              onPress={() => handleTaskSelection(item)}
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

export default TaskList;

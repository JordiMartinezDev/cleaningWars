import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import tasks from "../../data/tasks.json";
import { Divider } from "react-native-paper";

const TaskList = () => {
  const navigation = useNavigation();

  const [selectedTask, setSelectedTask] = useState(0);

  function setTask() {
    // use Redux Context to set the task
  }
  function newTask() {
    navigation.navigate("newTask");
  }
  return (
    <View>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />

      <FlatList
        data={tasks}
        renderItem={(itemData) => (
          <Pressable onPress={setTask}>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{itemData.item.name}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => {
          return item.id;
        }}
        // Flatlist expects the itemData to have a "key" property which is unique identifier
        // We use the id property of each task, and set the key property using keyExtractor
      />
      <Pressable onPress={newTask}>
        <View style={styles.newTaskButton}>
          <Button title="Add new" onPress={newTask} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: Dimensions.get("window").height / 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 8,
    borderRadius: 8,
  },
  text: {},
  newTaskButton: {
    height: Dimensions.get("window").height / 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default TaskList;

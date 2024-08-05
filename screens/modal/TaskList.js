import { View, Text, FlatList } from "react-native";
import React from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import tasks from "../../data/tasks.json";
import { Divider } from "react-native-paper";

const TaskList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <FlatList
        data={tasks}
        renderItem={(itemData) => (
          <View>
            <Text>{itemData.item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => {
          return item.id;
        }}
        // Flatlist expects the itemData to have a "key" property which is unique identifier
        // We use the id property of each task, and set the key property using keyExtractor
      />
    </View>
  );
};

export default TaskList;

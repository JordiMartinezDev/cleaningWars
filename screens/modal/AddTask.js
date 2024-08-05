import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const AddTask = ({}) => {
  const navigation = useNavigation();

  function showTaskListModal() {
    navigation.navigate("taskList");
  }
  function showCalendar() {
    navigation.navigate("datePicker");
  }

  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View style={styles.modalContainer}>
        {/*this should be a modal with all tasks + add new task */}
        <Pressable onPress={showTaskListModal}>
          <View style={styles.gridItem}>
            <View style={styles.innerContainer}>
              <Text>Task name/type</Text>
              <AntDesign name="right" size={16} color="black" />
            </View>
          </View>
        </Pressable>
        <View style={styles.gridItem}>
          <View style={styles.innerContainer}>
            <Text>User</Text>
          </View>
        </View>
        <View style={styles.gridItem}>
          <Pressable onPress={showCalendar}>
            <View style={styles.innerContainer}>
              <Text>{"date"}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  gridItem: {
    margin: 8,
    height: 56,
    minWidth: "80%",
    borderRadius: 8,
    elevation: 4,
    //iOS styling shadows
    backgroundColor: "white", // This is not iOS specific, but needed in order for iOS shadows to work
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //no Android specific
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  formField: {
    backgroundColor: "white",
  },
});

export default AddTask;

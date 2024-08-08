import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import CustomCard from "../../components/CustomCard";
import DatePicker from "../../components/DatePicker";

const AddTask = () => {
  const navigation = useNavigation();

  const showTaskListModal = () => {
    navigation.navigate("taskList");
  };

  const showCalendar = () => {
    navigation.navigate("datePicker");
  };

  const showUserModal = () => {
    // Define what to do when the "User" field is pressed
  };

  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />

      <View style={styles.container}>
        <CustomCard
          taskName="Kitchen"
          icon="baby"
          score={5}
          user="Jordi"
          color="#f47d2e"
        />

        <Pressable
          onPress={showUserModal}
          style={({ pressed }) => [
            styles.gridItem,
            pressed && styles.itemPressed,
          ]}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.text}>User</Text>
          </View>
        </Pressable>
        {/* <Pressable
          onPress={showCalendar}
          style={({ pressed }) => [
            styles.gridItem,
            pressed && styles.itemPressed,
          ]}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Date</Text>
          </View>
        </Pressable> */}
        <DatePicker />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#f9f9f9", // Light gray background to match TaskList
  },
  gridItem: {
    width: "90%",
    marginVertical: 8,
    marginHorizontal: 16,
    height: 56,
    borderRadius: 8, // Consistent rounded corners
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333", // Consistent text color
  },
  itemPressed: {
    backgroundColor: "#e6e6e6", // Slightly darker gray when pressed
  },
});

export default AddTask;

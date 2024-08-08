import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const AddTask = () => {
  const navigation = useNavigation();

  const showTaskListModal = () => {
    navigation.navigate("taskList");
  };

  const showCalendar = () => {
    navigation.navigate("datePicker");
  };

  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View style={styles.modalContainer}>
        <Pressable onPress={showTaskListModal} style={styles.pressable}>
          <View style={styles.gridItem}>
            <View style={styles.innerContainer}>
              <Text style={styles.text}>Task name/type</Text>
              <AntDesign name="right" size={16} color="black" />
            </View>
          </View>
        </Pressable>
        <View style={styles.gridItem}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>User</Text>
          </View>
        </View>
        <Pressable onPress={showCalendar} style={styles.pressable}>
          <View style={styles.gridItem}>
            <View style={styles.innerContainer}>
              <Text style={styles.text}>Date</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#f0f0f0", // Background color for better contrast
  },
  pressable: {
    width: "100%", // Ensures pressable area covers the whole width
    alignItems: "center",
  },
  gridItem: {
    width: "90%",

    marginVertical: 8,
    marginHorizontal: 16,
    height: 56,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333", // Darker text color for better readability
  },
});

export default AddTask;

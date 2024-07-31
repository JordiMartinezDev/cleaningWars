import { View, Text, Button, StyleSheet, Platform } from "react-native";
import React from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import Divider from "@mui/material/Divider";

const AddTask = ({ navigation }) => {
  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View style={styles.modalContainer}>
        {/*this should be a modal with all tasks + add new task */}
        <View style={styles.gridItem}>
          <View style={styles.innerContainer}>
            <Text>Task name/type</Text>
          </View>
        </View>
        <View style={styles.gridItem}>
          <View style={styles.innerContainer}>
            <Text>User, default is logged in</Text>
          </View>
        </View>
        <View style={styles.gridItem}>
          <View style={styles.innerContainer}>
            <Text>Day, default is selectedDay</Text>
          </View>
        </View>

        <Text style={{ fontSize: 30 }}>This is a modal!!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "start",
  },
  formField: {
    backgroundColor: "white",
  },
});

export default AddTask;

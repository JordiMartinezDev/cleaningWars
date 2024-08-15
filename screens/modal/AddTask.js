import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomCard from "../../components/CustomCard";
import DatePicker from "../../components/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { setUser as setCardUser } from "../../context/redux/slicers/cardSlicer";
import { setUserName as setAuthUserName } from "../../context/redux/slicers/authSlicer";
import eventsData from "../../data/events.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../components/CustomButton";
import { addBusinessDays } from "date-fns";

const { height: screenHeight } = Dimensions.get("window");

const AddTask = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cardProps = useSelector((state) => state.card);
  const reduxDate = useSelector((state) => state.event);
  const loggedInUserName = useSelector((state) => state.auth.userName);

  const [isUserModalVisible, setUserModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(loggedInUserName);

  const openTaskListModal = () => navigation.navigate("taskList");

  const toggleUserModal = () => setUserModalVisible(!isUserModalVisible);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    dispatch(setCardUser(user));
    toggleUserModal(); // Close the modal after selecting a user
  };

  const handleSave = async () => {
    const tasksForSelectedDate = eventsData[reduxDate.date] || [];
    tasksForSelectedDate.push({
      name: cardProps.taskName,
      points: cardProps.score,
      user: selectedUser,
      id: "1",
    });

    console.log(
      "Saved user: " +
        selectedUser +
        "\nSaved task: " +
        JSON.stringify(cardProps, null, 2) +
        "\n Date: " +
        reduxDate.date
    );

    navigation.goBack();
  };

  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} title="Add task" />
      <Divider />

      <View style={styles.container}>
        <CustomCard
          {...cardProps}
          user={selectedUser}
          onPress={openTaskListModal}
        />
        <Pressable
          onPress={toggleUserModal}
          style={({ pressed }) => [
            styles.gridItem,
            pressed && styles.itemPressed,
          ]}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{selectedUser}</Text>
          </View>
        </Pressable>

        <DatePicker />

        {/* Modal for User Selection */}
        <Modal
          visible={isUserModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={toggleUserModal}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={toggleUserModal}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select a User</Text>
              {["Jordi", "Alice", "Bob", "Eve"].map((user) => (
                <Pressable
                  key={user}
                  onPress={() => handleUserSelect(user)}
                  style={({ pressed }) => [
                    styles.modalOption,
                    pressed && styles.modalOptionPressed,
                  ]}
                >
                  <Text style={styles.modalOptionText}>{user}</Text>
                </Pressable>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
        <View style={styles.addButton}>
          <CustomButton text={"Add task"} onPress={handleSave} />
        </View>
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
    backgroundColor: "#f9f9f9",
  },
  gridItem: {
    width: "90%",
    marginVertical: 8,
    marginHorizontal: 16,
    height: 56,
    borderRadius: 8,
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
    color: "#333",
  },
  itemPressed: {
    backgroundColor: "#e6e6e6",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    maxHeight: screenHeight * 0.5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#000",
  },
  modalOption: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  modalOptionText: {
    fontSize: 16,
    color: "#007AFF", // iOS blue for options
  },
  modalOptionPressed: {
    backgroundColor: "#f0f0f0", // Light gray for pressed state
  },
  addButton: {
    flex: 1,
    width: "100%",
    marginBottom: 36,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default AddTask;

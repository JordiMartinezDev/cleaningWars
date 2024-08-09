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

const { height: screenHeight } = Dimensions.get("window");

const AddTask = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("Jordi");
  const [isUserModalVisible, setUserModalVisible] = useState(false);

  const showTaskListModal = () => {
    navigation.navigate("taskList");
  };

  const showCalendar = () => {
    navigation.navigate("datePicker");
  };

  const showUserModal = () => {
    setUserModalVisible(true);
  };

  const closeUserModal = () => {
    setUserModalVisible(false);
  };

  const handleUserSelect = (user) => {
    console.log("Selected user:", user);
    setUser(user);
    // Handle user selection logic here
    closeUserModal(); // Close the modal after selecting a user
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
          onPress={showTaskListModal}
          bgColor={null}
        />
        <Pressable
          onPress={showUserModal}
          style={({ pressed }) => [
            styles.gridItem,
            pressed && styles.itemPressed,
          ]}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{user}</Text>
          </View>
        </Pressable>

        <DatePicker />

        {/* Modal for User Selection */}
        <Modal
          visible={isUserModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeUserModal}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={closeUserModal}
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
});

export default AddTask;

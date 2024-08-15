import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { notAuthenticated } from "../context/redux/slicers/authSlicer";
import CustomButton from "../components/CustomButton";

const Configuration = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(notAuthenticated());
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Main content area */}
        <View style={styles.mainContent}>
          {/* Add your other components here */}
        </View>

        {/* Logout button */}
        <View style={styles.logOutButton}>
          <CustomButton text="Logout" onPress={handleLogout} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  mainContent: {
    flex: 1,
    // Add other styles for the main content area if needed
  },
  logOutButton: {
    width: "100%",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5", // Ensures consistency with container background
  },
});

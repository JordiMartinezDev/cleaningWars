import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
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
          <View style={styles.profileOptions}>
            <Text>User id/Profile</Text>
            <Text>Home</Text>
            <Text>Invite user</Text>
            <Text>Join home</Text>
          </View>
          <View style={styles.appOptions}>
            <Text>Language</Text>
            <Text>Notifications</Text>
          </View>
          <View style={styles.info}>
            <Text>Contact</Text>
            <Text>Terms of Use</Text>
            <Text>Privacy policy</Text>
          </View>
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
    backgroundColor: "#f5f5f5",
  },
  mainContent: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profileOptions: {
    justifyContent: "center",
    alignItems: "center",
  },
  appOptions: {
    justifyContent: "center",
    alignItems: "center",
  },
  logOutButton: {
    alignItems: "center",
    paddingBottom: 16,
    backgroundColor: "#f5f5f5",
  },
});

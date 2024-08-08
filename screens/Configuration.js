import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { notAuthenticated } from "../context/redux/slicers/authSlicer";
import CustomButton from "../components/CustomButton";

const Configuration = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(notAuthenticated());
  };

  return (
    <View style={styles.container}>
      <CustomButton text="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

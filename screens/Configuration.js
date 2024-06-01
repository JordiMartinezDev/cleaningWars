import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { notAuthenticated } from "../context/redux/slicers/authSlicer";

const Configuration = () => {
  dispatch = useDispatch();

  function handleLogout() {
    dispatch(notAuthenticated());
  }

  return (
    <View>
      <Text>Configuration</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Configuration;

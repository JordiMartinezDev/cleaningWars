import { View, Text, Button } from "react-native";
import React from "react";

const Settings = () => {
  function handleLogout() {
    // Logout -> context/Redux  isUserAuthenticated = false
  }

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Settings;

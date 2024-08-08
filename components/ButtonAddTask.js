import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonAddTask = (onDay) => {
  const navigation = useNavigation();

  function addTaskHandler() {
    navigation.navigate("addTask");
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={addTaskHandler}>
        <View>
          <AntDesign name="plus" size={32} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default ButtonAddTask;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 16,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});

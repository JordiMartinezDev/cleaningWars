import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonAddTask = () => {
  const navigation = useNavigation();

  function addTaskHandler() {
    navigation.navigate("addTask");
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={addTaskHandler}>
        <View style={null}>
          <AntDesign name="plus" size={32} color="black" />
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
    height: 64,
    width: 64,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});

import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ButtonAddTask = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
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

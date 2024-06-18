import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return <View style={styles.container}></View>;
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: windowHeight / 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

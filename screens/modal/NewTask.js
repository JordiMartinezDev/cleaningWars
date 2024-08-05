import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import React from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Input from "../../components/Input";

const NewTask = () => {
  const navigation = useNavigation();

  function pointsHandler() {}
  return (
    <View>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <Input title={"Task name"} textInputConfig={null} />
      <Input title={"Icon"} textInputConfig={null} />
      <Input
        title={"Points"}
        textInputConfig={{ keyboardType: "decimal-pad" }}
        onChangeText={pointsHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default NewTask;

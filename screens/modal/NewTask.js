import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import Input from "../../components/Input";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const NewTask = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  function scoreHandler(score) {
    setScore(score);
  }
  function nameHandler(name) {
    setName(name);
  }
  function handleSelectIcon() {
    navigation.navigate("selectIcon");
  }
  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            textInputConfig={{
              placeholder: "Name",
            }}
            onChangeText={nameHandler}
            value={name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            textInputConfig={{
              keyboardType: "decimal-pad",
              placeholder: "Score",
            }}
            onChangeText={scoreHandler}
            value={score}
          />
        </View>
        <Pressable onPress={handleSelectIcon}>
          <View style={styles.iconBar}>
            <View style={styles.defaultIconAndText}>
              <Text style={styles.iconText}>Select Icon</Text>
              <MaterialIcons
                name="local-laundry-service"
                size={40}
                color="gray"
              />
            </View>
            <View style={styles.icon}>
              <AntDesign name="right" size={16} color="gray" />
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
    justifyContent: "start",
  },
  inputContainer: {
    marginTop: 8,
    backgroundColor: "white",
  },
  nameContainer: {},
  iconBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 8,
  },
  iconText: {
    color: "gray",
    fontSize: 20,
    marginLeft: 8,
  },
  defaultIconAndText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
});
export default NewTask;

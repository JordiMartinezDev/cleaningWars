import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import Input from "../../components/Input";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import CustomIcon from "../../components/CustomIcon";

const NewTask = () => {
  const navigation = useNavigation();
  const selectedIcon = useSelector((state) => state.icon.iconName);

  console.log(selectedIcon);

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
              <CustomIcon icon={selectedIcon} size={48} color={"black"} />
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
    //shadow on Android
    elevation: 8,
    //Shadow on iOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  nameContainer: {},
  iconBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 8,
    elevation: 8,
    //Shadow on iOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
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

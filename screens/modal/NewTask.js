import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import Input from "../../components/Input";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";
import CustomIcon from "../../components/CustomIcon";

const NewTask = () => {
  const navigation = useNavigation();
  const selectedIcon = useSelector((state) => state.icon.iconName);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const scoreHandler = (score) => setScore(score);
  const nameHandler = (name) => setName(name);
  const handleSelectIcon = () => navigation.navigate("selectIcon");

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
              placeholder: "Score (0-10)",
              maxLength: 2,
            }}
            onChangeText={scoreHandler}
            value={score}
          />
        </View>
        <Pressable onPress={handleSelectIcon}>
          <View style={styles.iconBar}>
            <View style={styles.defaultIconAndText}>
              <Text style={styles.placeholderText}>Select Icon</Text>
              <CustomIcon icon={selectedIcon} size={32} color={"black"} />
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
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  inputContainer: {
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    height: 50,
  },
  smallInputContainer: {
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    height: 50,
    width: "30%",
  },
  iconBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    height: 50,
  },
  placeholderText: {
    color: "#C7C7CD", // Similar to placeholder text color
    fontSize: 20, // Same font size as input placeholders
    paddingHorizontal: 8,
  },
  defaultIconAndText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 8,
  },
});

export default NewTask;

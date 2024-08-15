import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import { Divider, TextInput } from "react-native-paper";
import CustomIcon from "../../components/CustomIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomCard from "../../components/CustomCard";

const screenWidth = Dimensions.get("window").width;

const NewTask = () => {
  const navigation = useNavigation();
  const selectedIcon = useSelector((state) => state.icon.iconName);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [score, setScore] = useState("");

  const [nameIsCorrect, setNameIsCorrect] = useState(false);
  const [scoreIsCorrect, setScoreIsCorrect] = useState(false);

  const handleSelectIcon = () => navigation.navigate("selectIcon");

  function nameTextChange(name) {
    setName(name);
    setNameIsCorrect(name.length <= 2);
  }

  const scoreTextChange = (score) => {
    setScore(score);
    setScoreIsCorrect(score === "");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <AddOrCancelHeader goBack={navigation.goBack} title="New task" />
          <Divider />
          <View style={styles.card}>
            <CustomCard
              taskName={name || "Name"}
              icon={selectedIcon}
              score={score || 0}
              user="User"
              color="#f47d2e"
              bgColor={null}
            />
          </View>
          <View style={styles.itemsForm}>
            <TextInput
              label="Name"
              value={name}
              mode="outlined"
              outlineColor="gray"
              error={nameIsCorrect}
              onChangeText={nameTextChange}
            />

            <TextInput
              label="Score"
              value={score}
              mode="outlined"
              outlineColor="gray"
              error={scoreIsCorrect}
              keyboardType="decimal-pad"
              maxLength={3}
              onChangeText={scoreTextChange}
            />

            <Pressable onPress={handleSelectIcon}>
              <View style={styles.iconBar}>
                <View style={styles.iconContent}>
                  <CustomIcon icon={selectedIcon} size={24} color={"black"} />
                  <Text style={styles.iconText}>
                    {selectedIcon ? "Icon" : "Select Icon"}
                  </Text>
                </View>
                <AntDesign
                  name="right"
                  size={16}
                  color="gray"
                  style={styles.arrowIcon}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.addButton}>
        <CustomButton text={"Add Task"} onPress={null} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
    paddingTop: 8,
    alignItems: "center",
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 16,
    width: screenWidth * 0.9,
    alignItems: "center",
  },
  itemsForm: {
    width: "90%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  iconBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 8,
  },
  arrowIcon: {
    marginLeft: 8,
  },
  addButton: {
    flex: 1,
    marginBottom: 24,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default NewTask;

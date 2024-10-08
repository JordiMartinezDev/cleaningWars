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
          <AddOrCancelHeader goBack={navigation.goBack} title="New Task" />
          <Divider style={styles.divider} />
          <View style={styles.card}>
            <CustomCard
              taskName={name || "Name"}
              icon={selectedIcon}
              score={score || 0}
              user="User"
              color="#f47d2e"
              bgColor={null}
              style={styles.customCard}
            />
          </View>
          <View style={styles.itemsForm}>
            <TextInput
              label="Task Name"
              value={name}
              mode="outlined"
              outlineColor="gray"
              error={nameIsCorrect}
              onChangeText={nameTextChange}
              style={styles.input}
            />

            <TextInput
              label="Task Score"
              value={score}
              mode="outlined"
              outlineColor="gray"
              error={scoreIsCorrect}
              keyboardType="decimal-pad"
              maxLength={3}
              onChangeText={scoreTextChange}
              style={styles.input}
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
    backgroundColor: "#f0f4f8", // Modern light background
    paddingTop: 16,
    alignItems: "center",
  },
  divider: {
    marginVertical: 12,
    height: 1,
    backgroundColor: "#e0e0e0", // Light gray divider
    width: "100%",
  },
  card: {
    marginVertical: 16,
    width: screenWidth * 0.9,
    alignItems: "center",
  },
  customCard: {
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  itemsForm: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "white", // Paper TextInput background fix
  },
  iconBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
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
    fontWeight: "500",
  },
  arrowIcon: {
    marginLeft: 8,
  },
  addButton: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 32,
  },
});

export default NewTask;

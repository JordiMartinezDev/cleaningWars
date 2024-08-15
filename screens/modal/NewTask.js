import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { useNavigation } from "@react-navigation/native";
import { Divider, TextInput } from "react-native-paper";
import CustomIcon from "../../components/CustomIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";

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
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          outlineColor="green"
          error={nameIsCorrect}
          onChangeText={nameTextChange}
        />
        <TextInput
          label="Comments ( Optional )"
          value={comment}
          mode="outlined"
          outlineColor="green"
          multiline={true}
          error={false}
          onChangeText={(text) => setComment(text)}
        />
        <TextInput
          label="Score"
          value={score}
          mode="outlined"
          outlineColor="green"
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
                {selectedIcon ? selectedIcon : "Select Icon"}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
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
});

export default NewTask;

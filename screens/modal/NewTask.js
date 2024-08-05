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
    <View style={styles.container}>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View style={styles.inputContainer}>
        <Input
          textInputConfig={{
            placeholder: "Name",
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "Score",
          }}
          onChangeText={pointsHandler}
        />
      </View>

      <Text>Icon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  inputContainer: {
    marginTop: 8,
  },
  nameContainer: {},
});
export default NewTask;

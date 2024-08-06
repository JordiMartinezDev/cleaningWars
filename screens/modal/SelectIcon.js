import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const SelectIcon = () => {
  const navigation = useNavigation();

  const iconList = [{ name: "baby", size: 24, color: "black" }];

  return (
    <ScrollView>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <Divider />
      <View>
        <FontAwesome5 name={iconList[0].name} size={48} color="black" />
      </View>
    </ScrollView>
  );
};

export default SelectIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

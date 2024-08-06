import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomIcon from "../../components/CustomIcon";

const SelectIcon = () => {
  const navigation = useNavigation();

  const iconList = [
    "baby",
    "baby-carriage",
    "sweep",
    "laundry",
    "dishes",
    "bathroom",
    "kitchen",
    "dog",
    "clothing",
    "local-laundry-service",
  ];

  return (
    <ScrollView>
      <AddOrCancelHeader goBack={navigation.goBack} />

      <Divider />
      <View>
        {iconList.map((icon) => {
          return <CustomIcon icon={icon} size={24} color={"black"} />;
        })}
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

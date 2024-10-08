import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import React from "react";
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton";
import AddOrCancelHeader from "../../components/AddOrCancelHeader";

const EventDetails = ({ route, navigation }) => {
  const event = route?.params?.event;

  const handleDelete = () => {
    console.log("deleted");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <>
      <AddOrCancelHeader goBack={navigation.goBack} />
      <View style={styles.container}>
        <CustomCard
          taskName={event.name}
          icon={event.icon}
          score={event.points}
          user={event.user}
          bgColor={"white"}
          onSave={() => {}}
        />
        <CustomButton text={"Edit"} onPress={handleEdit} />
        <CustomButton text={"Delete"} onPress={handleDelete} bgColor={"red"} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
});
export default EventDetails;

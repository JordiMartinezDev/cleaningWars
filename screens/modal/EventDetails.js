import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import React from "react";
import EditableCard from "../../components/EditableEventCard";
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton";

const EventDetails = ({ route, navigation }) => {
  const event = route?.params?.event;

  const handleSave = (updatedEvent) => {
    // Here you can handle saving the updated event data
    console.log("Updated Event:", updatedEvent);
    // You might want to update your events list or send the updated data to a backend
    navigation.goBack(); // Dismiss the modal after saving
  };

  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <View style={styles.container}>
      <CustomCard
        taskName={event.name}
        icon={event.icon}
        score={event.points}
        user={event.user}
        bgColor={"white"}
        onSave={handleSave}
      />
      <CustomButton text={"Delete"} onPress={handleDelete} bgColor={"red"} />
      <CustomButton onPress={() => navigation.goBack()} text="Back" />
    </View>
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

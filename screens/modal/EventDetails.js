import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import EditableCard from "../../components/EditableEventCard";

const EventDetails = ({ route, navigation }) => {
  const event = route?.params?.event;

  const handleSave = (updatedEvent) => {
    // Here you can handle saving the updated event data
    console.log("Updated Event:", updatedEvent);
    // You might want to update your events list or send the updated data to a backend
    navigation.goBack(); // Dismiss the modal after saving
  };
  return (
    <View style={styles.container}>
      <EditableCard
        initialTask={event.name}
        initialScore={event.points}
        initialUser={event.user}
        icon={event.icon}
        onSave={handleSave}
      />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
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

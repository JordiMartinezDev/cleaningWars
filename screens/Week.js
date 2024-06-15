import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import { Agenda } from "react-native-calendars";
import events from "../data/events.json";
import { useNavigation } from "@react-navigation/native";

const Week = () => {
  const navigation = useNavigation();

  const renderCalendarEvent = (event, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Pressable
        style={[style.pressableItem]}
        onPress={() => navigation.navigate("eventDetails")}
      >
        <Text style={{ fontSize, color }}>{event.name}</Text>
      </Pressable>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={style.emptyDateItem}>
        <Text>This is empty date</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Agenda items={events} renderItem={renderCalendarEvent} />
      {/* Agenda expects the items in a different way, not inside an array but with key value pairs where key is  date like "2022-11-25" */}
    </View>
  );
};

export default Week;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressableItem: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDateItem: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

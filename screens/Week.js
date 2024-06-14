import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Agenda } from "react-native-calendars";
import events from "../data/events.json";

const Week = () => {
  const renderCalendarEvent = (event) => {
    return <Text>{event.name}</Text>;
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
});

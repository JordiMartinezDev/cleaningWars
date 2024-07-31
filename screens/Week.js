import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import events from "../data/events.json";
import { useNavigation } from "@react-navigation/native";
import ButtonAddTask from "../components/ButtonAddTask";

function getStartingDate() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth();
  const day = new Date().getDate();

  if (month < 10) month = "0" + month;

  return year + "-" + month + "-" + day;
}

// -------- Component -----------

const Week = () => {
  const navigation = useNavigation();

  const [selectedDay, setSelectedDay] = useState(getStartingDate());
  console.log(selectedDay);

  const renderCalendarEvent = (event, isFirst) => {
    const fontSize = isFirst ? 14 : 14;
    const color = isFirst ? "#43515c" : "#43515c";

    if (event.user == "myUser")
      return (
        <Pressable
          style={[styles.pressableItem]}
          onPress={() => navigation.navigate("eventDetails")}
        >
          <Text style={{ fontSize, color }}>{event.name}</Text>
          <Text style={{ fontSize, color }}>{event.user}</Text>
        </Pressable>
      );
  };

  const renderEmptyData = () => {
    return (
      <View style={styles.emptyDateItem}>
        <Text>This is empty date</Text>
      </View>
    );
  };

  function dayChangeHandler() {
    // set the "events" object of the week of the selected day
  }

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        renderItem={renderCalendarEvent}
        renderEmptyData={renderEmptyData}
        onDayChange={dayChangeHandler}
        onDayPress={(day) => {
          setSelectedDay(day.dateString);
        }}

        // showOnlySelectedDayItems={false}
        // showClosingKnob={true}
      />
      {/* Agenda expects the items in a different way, not inside an array but with key value pairs where key is  date like "2022-11-25" */}
      <View style={styles.addTaskButton}>
        <ButtonAddTask onDay={selectedDay} />
      </View>
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
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
  addTaskButton: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
});

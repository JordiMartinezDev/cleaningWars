import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import events from "../data/events.json";
import { useNavigation } from "@react-navigation/native";
import ButtonAddTask from "../components/ButtonAddTask";
import CustomCard from "../components/CustomCard";

function getStartingDate() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  month++;

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

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
    const userBg = {
      backgroundColor: "#d4ef71",
      //backgroundColor: event.user.color --> Create this property linked to each user
    };

    // Set different userBg.backgroundColor for each user so the background looks different
    if (event.user == "Jordi") userBg.backgroundColor = "#ffb887";
    if (event.user == "Amanda") userBg.backgroundColor = "#ffbadd";
    if (event.user == "Nil") userBg.backgroundColor = "#fff08f";
    if (event.user == "Clara") userBg.backgroundColor = "b2e1ff";
    if (event.user == "Paula") userBg.backgroundColor = "d5bdff";
    if (event.user == "default") userBg.backgroundColor = "#d4ef71";

    return (
      <Pressable onPress={() => navigation.navigate("eventDetails")}>
        <CustomCard taskName={event.name} icon="baby" score={5} user="Jordi" />
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
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //no Android specific
  },
});

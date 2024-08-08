import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { Calendar } from "react-native-calendars";
import AddOrCancelHeader from "./AddOrCancelHeader";
import { Divider } from "react-native-paper";
import events from "../data/events.json";
import { useNavigation } from "@react-navigation/native";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState();
  const navigation = useNavigation();

  function setDay(date) {
    console.log(date.dateString);
    setSelectedDate(date.dateString);
  }
  function saveHandler() {
    //manage state with redux and save the date
  }
  return (
    <>
      <View style={styles.card}>
        <Calendar onDayPress={setDay} />
      </View>
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    width: "90%",
    marginTop: 8,
  },
  card: {
    width: "90%",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});

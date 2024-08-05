import { View, Text, StyleSheet, Dimensions } from "react-native";
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
      <AddOrCancelHeader goBack={navigation.goBack} save={saveHandler} />
      <Divider />
      <View style={styles.calendarContainer}>
        <Calendar onDayPress={setDay} />
      </View>
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  calendarContainer: {
    height: "50%",
  },
});

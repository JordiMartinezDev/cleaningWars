import { View, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState();

  // Handler function for when a date is selected
  function setDay(date) {
    console.log(date.dateString);
    setSelectedDate(date.dateString);
  }

  // `markedDates` with the selected date
  const markedDates = selectedDate
    ? { [selectedDate]: { selected: true } }
    : {};

  return (
    <View style={styles.card}>
      <Calendar
        onDayPress={setDay}
        firstDay={1}
        markedDates={markedDates} // Use dynamically generated markedDates
      />
    </View>
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

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ChartTimeSelector from "../components/ChartTimeSelector";
import CustomChart from "../components/CustomChart"; // Import CustomChart

// Mock data for each time frame
const weeklyData = [
  { value: 10, color: "#177AD5", text: "34%" },
  { value: 30, color: "#79D2DE", text: "44%" },
  { value: 20, color: "#ED6665", text: "24%" },
];

const monthlyData = [
  { value: 20, color: "#177AD5", text: "40%" },
  { value: 25, color: "#79D2DE", text: "35%" },
  { value: 15, color: "#ED6665", text: "25%" },
];

const yearlyData = [
  { value: 30, color: "#177AD5", text: "50%" },
  { value: 20, color: "#79D2DE", text: "30%" },
  { value: 10, color: "#ED6665", text: "20%" },
];

const houseInfo = {
  name: "Jordi&Amanda's House",
  members: 3,
  tasksCompleted: 120,
};

const Dashboard = () => {
  const [chartTimeFrame, setChartTimeFrame] = useState("Weekly");

  // Handle chart time frame selection
  const handleChartTime = (selectedTimeFrame) => {
    setChartTimeFrame(selectedTimeFrame);
  };

  // Select the data based on the current chartTimeFrame
  const selectedData =
    chartTimeFrame === "Weekly"
      ? weeklyData
      : chartTimeFrame === "Monthly"
      ? monthlyData
      : yearlyData;

  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{houseInfo.name}</Text>
        <Text style={styles.infoText}>Members: {houseInfo.members}</Text>
        <Text style={styles.infoText}>
          Tasks Completed: {houseInfo.tasksCompleted}
        </Text>
      </View>

      {/* Chart Time Selector */}
      <ChartTimeSelector
        onSelect={handleChartTime}
        selectedTime={chartTimeFrame}
      />

      <Text style={styles.title}>Contribution</Text>

      {/* CustomChart component handling both chart and legend */}
      <CustomChart data={selectedData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Dashboard;

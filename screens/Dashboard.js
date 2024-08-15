import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ChartTimeSelector from "../components/ChartTimeSelector";
import CustomChart from "../components/CustomChart";

// Mocking data for each time frame

const weeklyData = [
  { value: 10, color: "#FF6F61", text: "34%" },
  { value: 30, color: "#6B8E23", text: "44%" },
  { value: 20, color: "#FFD700", text: "24%" },
];

const monthlyData = [
  { value: 20, color: "#FF6F61", text: "40%" },
  { value: 25, color: "#6B8E23", text: "35%" },
  { value: 15, color: "#FFD700", text: "25%" },
];

const yearlyData = [
  { value: 30, color: "#FF6F61", text: "50%" },
  { value: 20, color: "#6B8E23", text: "30%" },
  { value: 10, color: "#FFD700", text: "20%" },
];

const houseInfo = {
  name: "Jordi & Amanda's House",
  members: 3,
  tasksCompleted: 120,
};

const Dashboard = () => {
  const [chartTimeFrame, setChartTimeFrame] = useState("Weekly");

  const handleChartTime = (selectedTimeFrame) => {
    setChartTimeFrame(selectedTimeFrame);
  };

  const selectedData =
    chartTimeFrame === "Weekly"
      ? weeklyData
      : chartTimeFrame === "Monthly"
      ? monthlyData
      : yearlyData;

  return (
    <View style={styles.container}>
      {/* House info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.houseName}>{houseInfo.name}</Text>
        <View style={styles.infoDetail}>
          <Text style={styles.infoText}>Members</Text>
          <Text style={styles.infoValue}>{houseInfo.members}</Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.infoText}>Tasks Completed</Text>
          <Text style={styles.infoValue}>{houseInfo.tasksCompleted}</Text>
        </View>
      </View>

      {/* Chart */}

      <View style={styles.contributionSection}>
        <ChartTimeSelector
          onSelect={handleChartTime}
          selectedTime={chartTimeFrame}
          style={styles.chartTimeSelector}
        />
        <Text style={styles.contributionTitle}>Contribution</Text>
        <CustomChart data={selectedData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 24,
    elevation: 5,
  },
  houseName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  infoDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  chartTimeSelector: {},
  contributionSection: {
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  contributionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Dashboard;

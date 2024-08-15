import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import ChartTimeSelector from "../components/ChartTimeSelector";

// Mock data
const pieData = [
  { value: 10, color: "#177AD5", text: "34%" },
  { value: 30, color: "#79D2DE", text: "44%" },
  { value: 20, color: "#ED6665", text: "24%" },
];
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
  const renderLegend = (item) => {
    return (
      <View style={styles.legendItem}>
        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
        <Text style={styles.legendText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{houseInfo.name}</Text>
        <Text style={styles.infoText}>Members: {houseInfo.members}</Text>
        <Text style={styles.infoText}>
          Tasks Completed: {houseInfo.tasksCompleted}
        </Text>
      </View>
      <ChartTimeSelector onSelect={() => {}} />
      <Text style={styles.title}>Contribution</Text>
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          donut={false} // Disable donut style for a regular pie chart
          showText
          textSize={18}
          textColor="#333"
          strokeWidth={6}
          strokeColor="#f9f9f9"
          innerCircleBorderWidth={8} // Remove inner circle border
        />
      </View>
      <View style={styles.legendContainer}>
        <FlatList
          data={pieData}
          renderItem={({ item }) => renderLegend(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    padding: 16,
    elevation: 2, // Shadow effect for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
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
  chartContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  centerLabel: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerLabelText: {
    color: "#333",
    fontSize: 16,
  },
  centerLabelValue: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
  },
  legendContainer: {},
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  legendText: {
    color: "#333",
    fontSize: 16,
  },
});

export default Dashboard;

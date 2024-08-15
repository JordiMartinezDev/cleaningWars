import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const CustomChart = ({ data }) => {
  const renderLegend = (item) => {
    return (
      <View style={styles.legendItem}>
        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
        <Text style={styles.legendText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          donut={false} // Disable donut style for a regular pie chart
          showText
          textSize={18}
          textColor="#333"
          strokeWidth={6}
          strokeColor="#f9f9f9"
        />
      </View>
      <View style={styles.legendContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => renderLegend(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  legendContainer: {
    margin: 8,
  },
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

export default CustomChart;

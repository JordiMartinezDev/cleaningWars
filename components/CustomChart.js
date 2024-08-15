import React from "react";
import { View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const CustomChart = ({ data }) => {
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <PieChart
        data={data}
        donut={false} // Regular pie chart
        showText
        textSize={18}
        textColor="#333"
        strokeWidth={6}
        strokeColor="#f9f9f9"
        innerCircleBorderWidth={8}
      />
    </View>
  );
};

export default CustomChart;

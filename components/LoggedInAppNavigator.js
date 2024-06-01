import { View, Text, Settings } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import { useSelector } from "react-redux";
import Week from "../screens/Week";
import Tasks from "../screens/Tasks";
import Configuration from "../screens/Configuration";

const Tab = createBottomTabNavigator();

const LoggedInAppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Week" component={Week} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Configuration" component={Configuration} />
    </Tab.Navigator>
  );
};

export default LoggedInAppNavigator;

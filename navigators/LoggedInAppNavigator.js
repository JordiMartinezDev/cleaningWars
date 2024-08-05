import { View, Text, Settings, Platform } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import { useSelector } from "react-redux";
import Week from "../screens/Week";
import Tasks from "../screens/Tasks";
import Configuration from "../screens/Configuration";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTask from "../screens/modal/AddTask";
import EventDetails from "../screens/modal/EventDetails";
import Header from "../components/Header";
import TaskList from "../screens/modal/TaskList";
import NewTask from "../screens/modal/NewTask";
import DatePicker from "../components/DatePicker";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Week"
        component={Week}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-week"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={Configuration}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const LoggedInAppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <>
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="logedInApp"
            component={TabsNavigator}
            options={{}}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
            animation: Platform.OS === "android" ? "slide_from_bottom" : "",
          }}
        >
          <Stack.Screen
            name="eventDetails"
            component={EventDetails}
            options={() => {
              presentation: "modal";
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="taskList" component={TaskList} />
          <Stack.Screen name="datePicker" component={DatePicker} />
          <Stack.Screen name="addTask" component={AddTask} />
          <Stack.Screen name="newTask" component={NewTask} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default LoggedInAppNavigator;

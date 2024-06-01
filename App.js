import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./screens/Auth/AuthNavigator";
import LoggedInNavigator from "./screens/LoggedInNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const isUserAuthenticated = true; // This has to be dynamically managed by Context

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        {isUserAuthenticated ? <LoggedInNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

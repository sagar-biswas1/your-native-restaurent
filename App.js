import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SingleMealScreen from "./screens/SingleMealScreen";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import "firebase/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderScreen from "./screens/OrderScreen";
import LogoutScreen from "./screens/LogoutScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "lightblue" },
  handleTitleStyle: { color: "white" },
  headerTintColor: { color: "white" },
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </Provider>
  );
}

const StackScreens = () => {
  const userData = useSelector((state) => state.userData.userDetails);
  if (!userData.email) {
    return (
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Details" component={SingleMealScreen} />
    </Stack.Navigator>
  );
};

function HomeTabs() {
  const userData = useSelector((state) => state.userData.userDetails);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Order-details") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Logout") {
            iconName = focused ? "ios-exit" : "ios-exit-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order-details" component={OrderScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default App;

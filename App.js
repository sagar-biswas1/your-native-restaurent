import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SingleMealScreen from "./screens/SingleMealScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

import "firebase/auth";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "lightblue" },
  handleTitleStyle: { color: "white" },
  headerTintColor: { color: "white" },
};

function App() {
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       let userDetails = {
  //         name: user.displayName,
  //         email: user.email,
  //         photo: user.photoURL,
  //       };
  //       dispatch(setUser(userDetails));
  //     }
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Details" component={SingleMealScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

export default App;

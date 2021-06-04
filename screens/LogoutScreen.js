import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/LoginActions";

import { useNavigation } from "@react-navigation/native";
const LogoutScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("log out successfully");
        dispatch(logoutUser);
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default LogoutScreen;

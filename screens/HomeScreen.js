import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MealCard from "../components/MealCard";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/LoginActions";
export default function HomeScreen({ navigation }) {
  const [isDisplayContent, setIsDisplayContent] = useState(false);
    const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let userDetails = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        dispatch(setUser(userDetails));
        setIsDisplayContent(true);
      } else {
        navigation.push("Login");
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return isDisplayContent ? (
    <View>
      <Text>hlw</Text>

      <View>
        <MealCard navigation={navigation} />{" "}
      </View>
    </View>
  ) : (
    "Authenticating...."
  );
}

const styles = StyleSheet.create({});

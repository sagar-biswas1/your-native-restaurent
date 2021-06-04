import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import MealCard from "../components/MealCard";
import firebase from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions/LoginActions";
import { loadAllMeals } from "../redux/actions/productActions";
export default function HomeScreen({ navigation }) {
  const userData = useSelector((state) => state.userData.userDetails);
  const products = useSelector((state) => state.products.allProducts);
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
        dispatch(loadAllMeals());
        setIsDisplayContent(true);
      } else {
        navigation.push("Login");
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return userData.email ? (
    <ScrollView>
      {products.map((product) => (
        <MealCard
          navigation={navigation}
          key={product.idMeal}
          product={product}
        />
      ))}

      {/* <MealCard navigation={navigation} />{" "} */}
    </ScrollView>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      Authenticating....
    </View>
  );
}

const styles = StyleSheet.create({});

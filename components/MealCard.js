import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
export default function MealCard({ navigation, product }) {
  const { strMealThumb, idMeal, strMeal, strCategory, strArea } = product;

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: strMealThumb,
            }}
            style={{
              width: 160,
              height: 160,
              marginRight: "10px",
              resizeMode: "cover",
              padding: 5,
            }}
          />
        </View>
        <View>
          <Text>{strMeal.slice(0, 20)}</Text>
          <Text>Category : {strCategory}</Text>
          <Text>Cuisine: {strArea}</Text>
          <Button
            title="See Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Details", {
                itemId: idMeal,
                otherParam: "anything you want here",
              });
            }}
          />{" "}
        </View>
      </View>
      ;
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    backgroundColor: "aliceblue",
  },
});

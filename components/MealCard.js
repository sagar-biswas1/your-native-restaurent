import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
export default function MealCard({ navigation }) {
  return (
    <View>
      <Text> this is product card </Text>
      <Button
        title="See Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

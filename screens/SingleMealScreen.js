import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SingleMealScreen({ navigation, route }) {
  const { itemId, otherParam } = route.params;

  console.log(itemId, otherParam);
  return (
    <View>
      <Text>this is single product . .....</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

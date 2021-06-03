import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, image } from "react-native-elements";
export default function LoginScreen() {
  return (
    <View>
      <StatusBar style="light" />
      <Text>this is login screen</Text>
      <View style={styles.inputContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {},
});

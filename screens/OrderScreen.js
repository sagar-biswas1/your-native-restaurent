import React from "react";
import { View, Text } from "react-native";
import { Button, Image } from "react-native-elements";
import { useSelector } from "react-redux";
const OrderScreen = () => {
  const userData = useSelector((state) => state.userData.userDetails);

  return (
    <View>
      <Text style={{ margin: 10 }}>
        Hello {userData?.name} . You can find your placed order details here...{" "}
      </Text>
    </View>
  );
};

export default OrderScreen;

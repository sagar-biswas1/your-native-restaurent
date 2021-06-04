import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Image } from "react-native-elements";
import { useSelector } from "react-redux";
const OrderScreen = () => {
  const userData = useSelector((state) => state.userData.userDetails);
  const orderedProduct = useSelector((state) => state.products.orderedProduct);
  return (
    <View>
      <Text style={{ margin: 10 }}>
        Hello {userData?.name} . You can find your placed order details here...{" "}
      </Text>
      {orderedProduct.map((product) => (
        <Card product={product} />
      ))}
    </View>
  );
};

const Card = ({ product }) => {
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
        </View>
      </View>
    </View>
  );
};

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
export default OrderScreen;

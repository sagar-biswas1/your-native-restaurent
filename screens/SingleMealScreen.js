import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";
import { useDispatch } from "react-redux";
import { placeOrder } from "../redux/actions/productActions";
export default function SingleMealScreen({ navigation, route }) {
  const { itemId, otherParam } = route.params;

  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.meals[0]);
        console.log(data.meals);
      });
  }, [itemId]);

  return (
    <View>
      <Image
        source={{
          uri: product.strMealThumb,
        }}
        style={{
          width: 160,
          height: 160,
          marginRight: "10px",
          resizeMode: "cover",
          padding: 5,
        }}
      />
      <Text>{product.strMeal}</Text>
      <Text>Category : {product.strCategory}</Text>
      <Text>Cuisine: {product.strArea}</Text>
      <Text>Price: ${Math.floor(Math.random() * 200) + 50}</Text>
      <Text>Description:</Text>
      <Text>{product.strInstructions}</Text>
      <Button
        title="Place Order"
        onPress={() => {
          dispatch(placeOrder(product.idMeal));
        }}
      />{" "}
    </View>
  );
}

const styles = StyleSheet.create({});

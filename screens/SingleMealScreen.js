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
          width: '95%',
          height: 300,
          margin: '10px',
          resizeMode: "cover",
          // padding: 5,
          borderRadius: '10PX'
        }}
      />
      <Text style={{
        textAlign: "center",
        fontWeight: '600',
        marginBottom: '15px',
        fontSize: '18px'
      }}>{product.strMeal}</Text>

      <Text style={{
        fontWeight: '600',
        marginStart: '15px',

      }}>Category : {product.strCategory}</Text>

      <Text style={{
        fontWeight: '600',
        marginStart: '15px'
      }}>Cuisine: {product.strArea}</Text>

      <Text style={{
        fontWeight: '600',
        marginStart: '15px'
      }}>Price: ${Math.floor(Math.random() * 200) + 50}</Text>

      <Text style={{
        fontWeight: '600',
        marginStart: '15px'
      }}>Description:</Text>

      <Text style={{
        fontWeight: '600',
        marginStart: '15px',
        marginRight: '10px',
        marginBottom: '50px',
        color: '#402B13'
      }}>{product.strInstructions}</Text>



      <Button
        style={{
          padding: '20px',

        }}
        title="Place Order"
        onPress={() => {
          dispatch(placeOrder(product.idMeal));
        }}
      />{" "}
    </View>
  );
}

const styles = StyleSheet.create({});

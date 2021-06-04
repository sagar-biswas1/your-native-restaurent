import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SingleMealScreen({ navigation, route }) {
  const { itemId, otherParam } = route.params;

  console.log(itemId, otherParam);
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, borderRadius: 10, padding: 20, borderColor: 'gray' }}>
        <Image source={{ uri: 'https://i.pinimg.com/600x315/30/42/51/3042517c616f5d3fdb1fa69e41798648.jpg' }} style={{ width: 100, height: 50, borderColor: 'gray' }} />

        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>
          ✔ Elements
      </Text>
        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>
          ✔ Elements
      </Text>
        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>
          ✔ Elements
      </Text>
        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>
          ✔ Elements
      </Text>
        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>
          ✔ Elements
      </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
    backgroundColor: 'rgb(173, 216, 230)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10



  },
});

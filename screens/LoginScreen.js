import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import firebase from "firebase";
import firebaseConfig from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/LoginActions";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        let userDetails = {
          name: displayName,
          email: email,
          photo: photoURL,
        };

        dispatch(setUser(userDetails));
        navigation.push("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: "https://i.ibb.co/jDhrLZY/attachment-101809364-removebg-preview.png",
        }}
        style={{ width: 250, height: 100, marginRight: "10px" }}
      /> <br />

      <View style={styles.inputContainer}>
        {/* <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
          }}
          style={{ width: 50, height: 50, marginRight: "10px" }}
        /> */}

        <Button


          style={{ backgroundColor: '#FFC300', borderRadius: '8px', borderColor: 'red' }}
          title="Login with Google"
          type="outline"
          onPress={handleGoogleLogin}
        />
      </View>
      <Button
        style={{ width: 250, marginTop: 15, borderRadius: "8px", backgroundColor: '#FF5733' }}
        title="Go to home page"
        type="outline"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",

    flexDirection: "row",
    justifyContent: "center",
  },
});

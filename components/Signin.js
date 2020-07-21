//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  StatusBar,
  TextInput,
} from "react-native";
//import {Container,Contect,Header,Form} from 'native-base';
import { Input, Block, Button } from "galio-framework";
import firebase from "./firebase";

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userRef) => {
        console.log(999, userRef);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            width: 400,
            height: 300,
            uri:
              "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg",
          }}
        />
        <Input
          placeholder="Email"
          rounded
          style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
          onChangeText={(val) => setEmail(val)}
        />
        <Input
          placeholder="password"
          password
          viewPass
          rounded
          style={{ marginLeft: 5, marginRight: 5 }}
          onChangeText={(val) => setPassword(val)}
        />
        <Button round uppercase color="info" onPress={() => onSignin()}>
          Sign In
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  content: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});

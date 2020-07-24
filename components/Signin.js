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
import { ScrollView } from "react-native-gesture-handler";

export default function Signin({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignin = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userRef) => {
          //console.log(999, userRef);
        });
      navigation.navigate("ViewRecentNotifications");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={{
              width: 400,
              height: 300,
              uri:
                "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg",
            }}
          />
          <View style={{ width: "80%" }}>
            <Input
              placeholder="Email"
              rounded
              style={{ marginTop: 5 }}
              onChangeText={(val) => setEmail(val)}
            />
            <Input
              placeholder="password"
              password
              viewPass
              rounded
              style={{ marginBottom: 20 }}
              onChangeText={(val) => setPassword(val)}
            />
          </View>
          <Button round uppercase color="info" onPress={() => onSignin()}>
            Sign In
          </Button>
        </View>
      </ScrollView>
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
});

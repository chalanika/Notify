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
import { Input, Block, Button } from "galio-framework";
import firebase from "./firebase";
import { ScrollView } from "react-native-gesture-handler";

export default function Signup({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [position, setPosition] = useState();

  const onSignup = () => {
    try {
      if (password.length < 6) {
        alert("Please enter at least 6 characters");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userData) => {
          if (userData) {
            console.log(444, userData);
            let userRef = firebase
              .firestore()
              .collection("users")
              .doc(userData.user.uid);
            //console.log(111, userRef);
            userRef.set({
              Email: userData.user.email,
              Name: name,
              Position: position,
            });
            navigation.navigate("ViewRecentNotifications");
          }
        });
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
                "https://img.freepik.com/free-vector/account-log-page_41910-263.jpg?size=626&ext=jpg",
            }}
          />

          <View style={{ width: "80%" }}>
            <Input
              placeholder="Name"
              rounded
              style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
              onChangeText={(val) => setName(val)}
            />
            <Input
              placeholder="Email"
              rounded
              style={{ marginLeft: 5, marginRight: 5 }}
              onChangeText={(val) => setEmail(val)}
            />
            <Input
              placeholder="Position"
              rounded
              style={{ marginLeft: 5, marginRight: 5 }}
              onChangeText={(val) => setPosition(val)}
            />

            <Input
              placeholder="password"
              password
              viewPass
              rounded
              style={{ marginLeft: 5, marginRight: 5 }}
              onChangeText={(val) => setPassword(val)}
            />
          </View>
          <Button
            round
            uppercase
            color="info"
            onPress={() => onSignup()}
            style={{ marginBottom: 30 }}
          >
            Sign Up
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
    //marginTop: 80,
  },
});

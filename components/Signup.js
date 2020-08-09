import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  StatusBar,
  TextInput,
  YellowBox,
} from "react-native";
import { Input, Block, Button } from "galio-framework";
import firebase from "./firebase";
import { ScrollView } from "react-native-gesture-handler";

export default function Signup({ navigation }) {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState();
  const [validName, setvalidName] = useState();
  const [validEmail, setvalidEmail] = useState();
  const [validPosition, setvalidPosition] = useState();
  const [validPassword, setvalidPassword] = useState();

  const onSignup = () => {
    if (name === '') setvalidName('Name is required.')
    if (email === '') setvalidEmail('Email is required.');
    if (position === '') setvalidPosition('Position is required.');
    if (password === '') setvalidPassword('Password is required.');
    if (email != '' && name != '' && position != '' && password != '') {
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
        }).catch(error => {
          console.log(error.code);
          console.log(error.message);
          error.code === 'auth/invalid-email'
            ? setError('Email Address is invalid')
            : error.code === 'auth/weak-password'
              ? setError('The password must be 6 characters long or more.')
              : error.code === 'auth/email-already-in-use'
                ? setError('The email address is already in use by another account.')
                : error.code === 'auth/too-many-requests'
                  ? setError('Too many unsuccessful login attempts. Please try again later.')
                  : setError('Something is wrong. Please try again later.')

        });

    }

  };
  const handleError = ()=>{
    setError(' ');
     setvalidPosition(' ');
     setvalidName(' ');
     setvalidEmail(' ');
     setvalidPassword(' ');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View>
          <Image
            source={
              require('../assets/PinClipart.com_no-cell-phone-clip_2129001.png')
            }
            resizeMode="contain"
            style={{width:400,height:250}}
          />
          </View>
          {error && <Text style={{ color: 'red', fontSize: 14, margin: 10, justifyContent: 'center', textAlign: 'center' }}>{error}</Text>}
          <View style={{ width: "80%" }}>
            <Input
              placeholder="Name"
              rounded
              style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
              onChangeText={(val) => setName(val)}
              onFocus={() => handleError()}
            />
            {validName && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validName}</Text>}
            <Input
              placeholder="Email"
              rounded
              style={{ marginLeft: 5, marginRight: 5 }}
              onChangeText={(val) => setEmail(val)}
              onFocus={() => handleError()}
            />
            {validEmail && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validEmail}</Text>}
            <Input
              placeholder="Position"
              rounded
              style={{ marginLeft: 5, marginRight: 5 }}
              onChangeText={(val) => setPosition(val)}
              onFocus={() => handleError()}
            />
            {validPosition && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validPosition}</Text>}
            <Input
              placeholder="password"
              password
              viewPass
              rounded
              style={{ marginLeft: 5, marginRight: 5 }}
              onChangeText={(val) => setPassword(val)}
              onFocus={() => handleError()}
            />
            {validPassword && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validPassword}</Text>}
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

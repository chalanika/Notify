//import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  YellowBox,
} from "react-native";
import { Block, Button } from "galio-framework";

export default function Home({ navigation }) {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  return (
    <View style={styles.container} >
      <View style={styles.content} style={{ flexDirection: "column" }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Image
            resizeMode="contain"
            source={
              require('../assets/notify-logo.png')
            }
            style={{
              width: '100%',
              height: '40%',
              justify:'center'
            }}
          />
        </View>

        {/* <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         
        </View> */}
        <View
          style={{
            flex: 2,
            marginLeft: 10,
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require('../assets/home.png')}
            style={{
              width: "100%",
              height: "110%",
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 30,
            flex: 1,

          }}
        >
          <Button
            round
            uppercase
            color="info"
            size="large"
            onPress={() => navigation.navigate("Signup")}
          >
            Sign Up
          </Button>
          <Button
            round
            uppercase
            color="info"
            size="large"
            onPress={() => navigation.navigate("Signin")}
          >
            Sign In
          </Button>
        </View>
      </View>


    </View>
  );
}
console.log(StatusBar.currentHeight);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //backgroundColor:'gold'
  },

  content: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",

  },
});

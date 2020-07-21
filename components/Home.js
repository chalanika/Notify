//import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import { Block, Button } from "galio-framework";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://www.notifytechnology.com/wp-content/themes/notify/images/notify-logo.png",
          width: 200,
          height: 80,
        }}
        style={{ marginTop: 80 }}
      />
      <View style={styles.content} style={{ flexDirection: "column" }}>
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
            source={{
              width: "80%",
              height: "110%",
              uri:
                "https://miro.medium.com/max/4166/1*bm6oHJKQ0IKIQSywAuJxmQ.png",
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 10,
            flex: 1,
            marginTop: 40,
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

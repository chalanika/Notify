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
      <View style={styles.content} style={{ flexDirection: "column" }}>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 25 }}>Welcome to </Text>
          <Text style={{ fontSize: 30, fontWeight: "300" }}>NOTIFY !!!</Text>
        </View>
        <View style={{ flex: 3, marginLeft: 10, marginRight: 10 }}>
          <Image
            source={{
              width: "100%",
              height: "100%",
              uri:
                "https://miro.medium.com/max/4166/1*bm6oHJKQ0IKIQSywAuJxmQ.png",
            }}
          />
        </View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Button round uppercase color="info" size="large">
            Sign Up
          </Button>
          <Button round uppercase color="info" size="large">
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

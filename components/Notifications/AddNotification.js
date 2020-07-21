import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import { Button } from "galio-framework";

const AddNotifications = ({ route, navigation }) => {
  const { userId } = route.params;
  const [value, onChangeText] = React.useState("Useless Placeholder");
  console.log(userId);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "300" }}>
            Add Notification
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            //justifyContent: "center",
            marginTop: 30,
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
              width: "70%",
              color: "gray",
              marginBottom: 20,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <TextInput
            style={{
              height: 100,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
              width: "70%",
              color: "gray",
              marginBottom: 40,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <Button color="info">Submit</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  content: {
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
});

export default AddNotifications;

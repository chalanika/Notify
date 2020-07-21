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
import "react-native-gesture-handler";
import { Input, Block, Button, Toast } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import firebase from "../firebase";

class ViewRecentNotifications extends React.Component {
  state = {
    currentUser: {},
    id: "",
    name: "",
    email: "",
    position: "",
  };

  componentDidMount() {
    //get current logged user
    try {
      firebase.auth().onAuthStateChanged((userData) => {
        if (userData) {
          console.log(userData);
          firebase
            .firestore()
            .collection("users")
            .doc(userData?.uid)
            .get()
            .then((cred) => {
              console.log("kkkkkkkkkkkkkkkkkkkkkkkkk");
              if (cred) {
                this.setState({ currentUser: cred?.data() });
                this.setState({ id: userData?.uid });
                console.log(5555555555555555, this.state.currentUser);
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 2, margin: 30 }}>
            <View>
              <Text
                style={{
                  backgroundColor: "lightskyblue",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                The meeting will be on 3.00 PM Today
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Button
              round
              uppercase
              color="info"
              onPress={() => {
                navigation.navigate("AddNotifications", {
                  userId: this.state.id,
                });
              }}
            >
              + ADD
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default function (props) {
  const navigation = useNavigation();
  return <ViewRecentNotifications {...props} navigation={navigation} />;
}

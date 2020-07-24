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
  FlatList,
  ListItem,
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
    notifications: null,
    sampleList: [{ item: "A" }, { item: "B" }, { item: "C" }],
    date: new Date(),
  };

  componentDidMount() {
    //get current logged user

    try {
      console.log("gsfghjslks");
      firebase.auth().onAuthStateChanged((userData) => {
        if (userData) {
          console.log(userData);
          firebase
            .firestore()
            .collection("users")
            .doc(userData?.uid)
            .get()
            .then((cred) => {
              //console.log("kkkkkkkkkkkkkkkkk");
              if (cred) {
                this.setState({ currentUser: cred?.data() });
                this.setState({ id: userData?.uid });
                //console.log(5555555555555555, this.state.currentUser);
              }
            });
        }
      });
      firebase
        .firestore()
        .collection("notifications")
        .get()
        .then((snapshot) => {
          // this.setState({ notifications: res });
          // console.log(6666, this.state.notifications);
          let notifications = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            notifications.push(data);
          });
          this.setState({ notifications: notifications });
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
                {this.state.currentUser.Name}
              </Text>
              <FlatList
                data={this.state.notifications}
                renderItem={({ item }) => (
                  <View
                    key={item.Title}
                    style={{
                      borderColor: "red",
                      backgroundColor: "gold",
                      borderWidth: 3,
                      marginBottom: 3,
                    }}
                  >
                    <Text>{item.Title}</Text>
                    <Text>{item.Description}</Text>

                    <Text>
                      {new Date(parseInt(1595521432 * 1000)).toDateString()}
                    </Text>
                    {/* <Text>{item.Date.toMillis().toString()}</Text> */}
                  </View>
                )}
              />
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
            {this.state.notifications &&
              console.log(8888, this.state.notifications)}

            {/* {this.state.notifications?.forEach((doc) => {
              console.log(45454545, doc.data());
              
            })} */}

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

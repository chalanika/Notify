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
import { Icon } from 'react-native-elements'
import { Divider } from 'react-native-elements';


class ViewRecentNotifications extends React.Component {
  state = {
    currentUser: {},
    id: "",
    name: "",
    email: "",
    position: "",
    notifications: null,
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
              if (cred) {
                this.setState({ currentUser: cred?.data() });
                this.setState({ id: userData?.uid });
              }
            });

          firebase
            .firestore()
            .collection("notifications").orderBy("Date", "desc")
            .get()
            .then((snapshot) => {
              let notifications = [];
              snapshot.forEach((doc) => {
                const data = doc.data();
                data.id = doc.id;
                notifications.push(data);
              });
              this.setState({ notifications: notifications });
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

          <View style={{ flex: 3, margin: 3 }}>

            <View>

              <FlatList
                data={this.state.notifications}
                renderItem={({ item }) => (
                  <View
                    key={item.Title}
                    style={{
                      margin: 10,
                      flexDirection: 'column',
                      marginBottom: 3,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', width: '80%' }}>{item.Title} </Text>
                      <Text style={{ fontWeight: 'bold', width: '20%' }}>{new Date(parseInt(item.Date.seconds * 1000)).getDate()}{' '}{this.state.months[new Date(parseInt(item.Date.seconds * 1000)).getMonth()]}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text numberOfLines={1}
                        onPress={() => {
                          navigation.navigate("DetailsNotification", {
                            title: item.Title,
                            description: item.Description,
                            date: item.Date.seconds,
                          });
                        }}
                        style={{ color: 'gray', fontSize: 12, width: '90%' }}>{item.Description}</Text>

                    </View>
                    {/* <Text></Text> */}
                    <Divider style={{ backgroundColor: 'gray', marginVertical: 3 }} />
                  </View>
                )}
                keyExtractor={item => item.Title}
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

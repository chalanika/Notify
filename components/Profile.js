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
import firebase from "./firebase";
import { Icon } from 'react-native-elements'
import { Divider } from 'react-native-elements';


class Profile extends React.Component {
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
            <View>
                <Text>jhijijoj</Text>
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
  return <Profile {...props} navigation={navigation} />;
}

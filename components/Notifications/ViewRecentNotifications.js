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
    x: Number,
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
      <View style={{ flex: 1 }}>
        <View style={{
          backgroundColor: '#13a7d4',
          borderRadius: 10,
          margin: 10,
          flex: 0.125
        }}>

          {/* <View style={{backgroundColor:'red'}}> <Text></Text></View> */}
          <View style={{ backgroundColor: '#13a7d4', flex: 0.35, borderTopStartRadius: 10, borderTopEndRadius: 10, padding: 5, borderColor: 'darkblue' }}><Text>{this.state.currentUser.Name}</Text></View>
          <View style={{ backgroundColor: 'white', flex: 0.65, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 5, borderColor: '#13a7d4', borderWidth: 2, marginTop: 0 }}><Text>{this.state.currentUser.Name}</Text></View>
          <Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
        </View>
        <View style={{
          backgroundColor: '#13a7d4',
          borderRadius: 10,
          margin: 10,
          flex: 0.125
        }}>

          {/* <View style={{backgroundColor:'red'}}> <Text></Text></View> */}
          <View style={{ backgroundColor: '#13a7d4', flex: 0.35, borderTopStartRadius: 10, borderTopEndRadius: 10, padding: 5, borderColor: 'darkblue' }}><Text>{this.state.currentUser.Name}</Text></View>
          <View style={{ backgroundColor: 'white', flex: 0.65, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 5, borderColor: '#13a7d4', borderWidth: 2, marginTop: 0 }}><Text>{this.state.currentUser.Name}</Text></View>

        </View>
        <View style={{
          backgroundColor: '#13a7d4',
          borderRadius: 10,
          margin: 10,
          flex: 0.125
        }}>

          {/* <View style={{backgroundColor:'red'}}> <Text></Text></View> */}
          <View style={{ backgroundColor: '#13a7d4', flex: 0.35, borderTopStartRadius: 10, borderTopEndRadius: 10, padding: 5, borderColor: 'darkblue' }}><Text>{this.state.currentUser.Name}</Text></View>
          <View style={{ backgroundColor: 'white', flex: 0.65, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 5, borderColor: '#13a7d4', borderWidth: 2, marginTop: 0 }}><Text>{this.state.currentUser.Name}</Text></View>

        </View>
        <View style={{
          backgroundColor: '#13a7d4',
          borderRadius: 10,
          margin: 10,
          flex: 0.125
        }}>

          {/* <View style={{backgroundColor:'red'}}> <Text></Text></View> */}
          <View style={{ backgroundColor: '#13a7d4', flex: 0.35, borderTopStartRadius: 10, borderTopEndRadius: 10, padding: 5, borderColor: 'darkblue' }}><Text>{this.state.currentUser.Name}</Text></View>
          <View style={{ backgroundColor: 'white', flex: 0.65, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 5, borderColor: '#13a7d4', borderWidth: 2, marginTop: 0 }}><Text>{this.state.currentUser.Name}</Text></View>

        </View>
      </View>


      // <View style={styles.container}>
      //   <View style={{ flex: 1 }}>

      //     <View style={{ flex: 3, margin: 3 }}>

      //       <View>
      //         {/* <Text
      //           style={{
      //             backgroundColor: "lightskyblue",
      //             padding: 10,
      //             borderRadius: 10,
      //           }}
      //         >

      //         </Text> */}
      //         <FlatList
      //           data={this.state.notifications}
      //           renderItem={({ item }) => (
      //             <View
      //               key={item.Title}
      //               style={{
      //                 borderColor: "red",
      //                 backgroundColor: "gold",
      //                 borderWidth: 3,
      //                 marginBottom: 3,
      //               }}
      //             >

      //               <Text>{item.Title}</Text>
      //               <Text>{item.Description}</Text>
      //               <Text>{item.Date.seconds}</Text>



      //               <Text>{new Date(parseInt(item.Date.seconds * 1000)).toDateString()}</Text>
      //             </View>
      //           )}
      //         />
      //       </View>
      //     </View>

      //     <View
      //       style={{
      //         flex: 1,
      //         justifyContent: "flex-end",
      //         alignItems: "center",
      //         marginBottom: 20,
      //       }}
      //     >

      //       <Button
      //         round
      //         uppercase
      //         color="info"
      //         onPress={() => {
      //           navigation.navigate("AddNotifications", {
      //             userId: this.state.id,
      //           });
      //         }}
      //       >
      //         + ADD
      //       </Button>
      //     </View>
      //   </View>
      // </View>

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

import React, { useState,Component } from "react";
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
  YellowBox,

} from "react-native";
import "react-native-gesture-handler";
import { Input, Block, Toast, Button } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import firebase from "./firebase";
import { Icon } from 'react-native-elements'
import { Divider } from 'react-native-elements';


class Profile extends Component {
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

  onSignOut(){
    firebase.auth().signOut();  
    this.props.navigation.navigate('Home');
  }

  onLeave(){
    
    firebase.firestore().collection('users').doc(this.state.id).delete();
    firebase.auth().currentUser.delete();
    this.props.navigation.navigate('Home');
    console.log('uuuuuuuuuuuuuuuuuu');
  }

  render() {
    YellowBox.ignoreWarnings(["Setting a timer"]);
    const { navigation } = this.props;
    console.log(666,this.state.id);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{ flex: 0.2, backgroundColor: 'whitesmoke', borderRadius: 10, width: '95%', marginTop: 20, flexDirection: 'row' }}>
            <View style={{ flex: 0.3 }}>
              <Image
                resizeMode="contain"
                source={{
                  width: '100%',
                  height: '85%',
                  uri:
                    "https://www.pngitem.com/pimgs/m/43-434438_admin-person-man-people-customer-user-human-transparent.png",
                }}
                style={{ marginTop: 10 }}
              />
            </View>
            <View style={{ flex: 0.7,  alignContent: 'center', justifyContent: 'center' ,width:'80%'}}>
              <View style={{ flexDirection: "row" }} >
                <Text style={{ fontWeight: 'bold', fontSize: 14 ,width:'25%'}}>Name </Text>
                <Text style={{ marginBottom: 3, color: 'gray',width:'80%' }}>: {this.state.currentUser.Email}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 14,width:'25%' }}>Email </Text>
                <Text style={{ marginBottom: 3, color: 'gray',width:'80%' }}>: {this.state.currentUser.Email}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14,width:'25%'}}>Position </Text>
                <Text style={{ marginBottom: 3, color: 'gray',width:'80%' }}>: {this.state.currentUser.Position}</Text>
              </View>

            </View >
          </View>

          <View style={{ flex: 0.07, padding: 5, backgroundColor: '#5dbcd2', marginTop: 40, borderRadius: 10, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => {
              navigation.navigate('EditProfile', {
                name: this.state.currentUser.Name,
                position: this.state.currentUser.Position,
                userId:this.state.id,

              });
            }} style={{ color: 'white', fontSize: 16, fontSize: 16 }}>Change Contact Information </Text>
          </View>
          <View style={{ flex: 0.07, padding: 5, backgroundColor: '#5dbcd2', marginTop: 30, borderRadius: 10, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16 }} onPress={()=>this.onLeave()}>Leave From Workplace</Text>
          </View>
          <View style={{ flex: 0.66, alignItems: 'center', width: '90%', justifyContent: 'flex-end', marginBottom: 30 }}>
            <Button
              round
              uppercase
              color="info"
              style={{ width: "100%" }}
              onPress={()=>{this.onSignOut()}}
            >
              Sign out
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
    backgroundColor: "whitesmoke",
    alignItems: "center",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    width: '90%',
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10

  }
});

export default function (props) {
  const navigation = useNavigation();
  return <Profile {...props} navigation={navigation} />;
}

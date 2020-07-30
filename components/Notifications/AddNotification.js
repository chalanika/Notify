import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import { Button, Input } from "galio-framework";
import firebase from "../firebase";
import { ScrollView } from "react-native";

const AddNotifications = ({ route, navigation }) => {
  const { userId } = route.params;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState('Description');



  const onAddNotice = () => {
    console.log(8, title);
    console.log(9, description);
    console.log(4, value);
    try {
      firebase.firestore().collection("notifications").add({
        Title: title,
        Description: description,
        Date: new Date(),
      });
      navigation.navigate("ViewRecentNotifications");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userId);
  return (
    <ScrollView>
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
          <Text style={{ fontSize: 30, fontWeight: "300" }}>Add Notice</Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            //justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Input
            placeholder="Title"
            rounded
            style={{
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              width: "80%",
            }}
            onChangeText={(val) => setTitle(val)}
          />
          {/* <Input
            placeholder="Description"
            rounded
            style={{
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              width: "80%",
            }}
            onChangeText={(val) => setDescription(val)}
          /> */}
          <View
            style={{
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 1,
              borderColor: 'gray',
              width: '80%',
              borderRadius: 30,
              margin: 5,
              marginBottom: 20

            }}>
            <TextInput
              multiline
              numberOfLines={3}
              onChangeText={text => setDescription(text)}
              value={description}
              editable
              style={{ padding: 7, color: 'gray', paddingLeft: 9 }}
            />
          </View>

          <Button color="info" round onPress={() => onAddNotice()} style={{marginBottom:30}}>
            Publish
          </Button>
        </View>
      </View>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  content: {
    width: "80%",
    flex:1,
    backgroundColor:'white',
    marginTop:30,
  },
});

export default AddNotifications;

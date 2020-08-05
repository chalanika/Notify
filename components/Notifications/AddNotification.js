import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Platform,
  StyleSheet,
  YellowBox,
} from "react-native";
import { Button, Input } from "galio-framework";
import firebase from "../firebase";
import { ScrollView } from "react-native";

const AddNotifications = ({ route, navigation }) => {
  YellowBox.ignoreWarnings(["Setting a timer"]);
  const { userId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validTitle, setvalidTitle] = useState();
  const [validDescription, setvalidDescription] = useState();

  const onAddNotice = () => {

    if (title != '' && description != '') {
      try {
        console.log('hhjhui');
        firebase.firestore().collection("notifications").add({
          Title: title,
          Description: description,
          Date: new Date(),
        }).then(() => {
          setTitle('');
          setDescription('');
          navigation.push("ViewRecentNotifications");
          
        });
        

      } catch (error) {
        console.log(error);
      }
    } else {
      if (title == '') setvalidTitle('Title is required.');
      if (description == '') setvalidDescription('Description is required.');
    }

  };

  const handleError = () => {

    setvalidDescription(' ');
    setvalidTitle(' ');

  }

  console.log(title);
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
            <Text style={{ fontSize: 30, }}>Add Notice</Text>
          </View>
          <View
            style={{
              flex: 0.5,
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
              value={title}
              onChangeText={(val) => setTitle(val)}
              onChange={() => handleError()}
            />
            {validTitle && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validTitle}</Text>}
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
                placeholder='Description'
                multiline
                numberOfLines={3}
                onChangeText={text => setDescription(text)}
                value={description}
                editable
                style={{ padding: 7, color: 'gray', paddingLeft: 9 }}
                onChange={() => handleError()}
              />

            </View>
            {validDescription && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validDescription}</Text>}
            <Button color="info" round onPress={() => onAddNotice()} style={{ marginBottom: 50, marginTop: 40 }} >
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
    width: "90%",
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
  },
});

export default AddNotifications;

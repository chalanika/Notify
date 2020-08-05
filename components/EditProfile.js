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
import firebase from "./firebase";
import { ScrollView } from "react-native";

const EditProfile = ({ route, navigation }) => {
    YellowBox.ignoreWarnings(["Setting a timer"]);
    const { name, position,userId } = route.params;
    const [editname, setName] = useState(name);
    const [editposition, setPosition] = useState(position);
    const [validName, setvalidName] = useState();
    const [validPosition, setvalidPosition] = useState();

    const editUser = () => {
        if (editname === '') setvalidName('Name is required.')
        if (editposition === '') setvalidPosition('Position is required.');
        if(editposition !== '' && editname !== ''){
            try {
                console.log(editposition);
                firebase.firestore().collection("users").doc(userId).update({
                    Name:editname,
                    Position:editposition,
                });
                navigation.push("Profile");
            } catch (error) {
                console.log(error);
            }
        }
        
    };

    const handleError = ()=>{
       
         setvalidPosition(' ');
         setvalidName(' ');
        
      }
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
                        <Text style={{ fontSize: 30, }}>Edit  Profile</Text>
                    </View>
                    <View
                        style={{
                            flex: 0.5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 30,
                            width: '100%',
                            flexDirection: 'column',


                        }}
                    >

                        <Input
                            
                            value={editname}
                            rounded
                            style={{ marginTop: 5, width: '90%' }}
                            onChangeText={(val) => setName(val)}
                            onFocus={() => handleError()}
                        />
 {validName && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validName}</Text>}
                        <Input
                            
                            value={editposition}
                            rounded
                            style={{ marginLeft: 5, width: '90%' }}
                            onChangeText={(val) => setPosition(val)}
                            onFocus={() => handleError()}
                        />
                        {validPosition && <Text style={{ color: 'red', fontSize: 12, paddingLeft: 10 }}>{validPosition}</Text>}
                        <Button color="info" round onPress={() => editUser()} style={{ marginBottom: 50, marginTop: 40 }} >
                            Edit
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

export default EditProfile;

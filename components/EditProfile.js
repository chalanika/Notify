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
import firebase from "./firebase";
import { ScrollView } from "react-native";

const EditProfile = ({ route, navigation }) => {
    const { name, position,userId } = route.params;
    console.log(userId);
    const [editname, setName] = useState(name);
    const [editposition, setPosition] = useState(position);


    const editUser = () => {
       
        try {
            console.log(editposition);
            firebase.firestore().collection("users").doc(userId).update({
                Name:editname,
                Position:editposition,
            });
            navigation.navigate("Profile");
        } catch (error) {
            console.log(error);
        }
    };


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
                        />

                        <Input
                            
                            value={editposition}
                            rounded
                            style={{ marginLeft: 5, width: '90%' }}
                            onChangeText={(val) => setPosition(val)}
                        />
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

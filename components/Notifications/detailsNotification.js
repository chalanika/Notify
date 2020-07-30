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

const DetailsNotification = ({ route, navigation }) => {
    const { docId, title, description, date } = route.params;

    console.log(666, docId, title, description, date);
    return (

        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    content: {
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
        flex: 1,
    },
});

export default DetailsNotification;

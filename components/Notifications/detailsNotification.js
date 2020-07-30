import React, { Component, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StatusBar,
    Platform,
    StyleSheet,
    Image
} from "react-native";
import { Button, Input } from "galio-framework";

const DetailsNotification = ({ route, navigation }) => {
    const { title, description, date } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ flexDirection: 'column', width: '100%', }} >
                    <Text style={{ fontWeight: 'bold', width: '100%', fontSize: 30 }}>{title}</Text>
                    <Text style={{ color: 'gray' ,fontSize:12}}>{new Date(parseInt(date * 1000)).toDateString()}{'   '}{new Date(parseInt(date * 1000)).toLocaleTimeString()}</Text>
                </View>
                <View style={{ marginTop: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 16 }}>{description}</Text>
                </View>



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: "center",

        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    content: {
        width: "80%",
        backgroundColor: 'white',
        paddingLeft: 10,
        borderRadius: 10,
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40
    },
});

export default DetailsNotification;

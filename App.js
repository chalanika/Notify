import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, YellowBox, Button, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { Icon } from "react-native-elements";
import ViewRecentNotifications from "./components/Notifications/ViewRecentNotifications";
import AddNotifications from "./components/Notifications/AddNotification";
import DetailsNotification from "./components/Notifications/detailsNotification";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

const Stack = createStackNavigator();

export default function App() {
  YellowBox.ignoreWarnings(["Setting a timer"]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
         <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "Change Contact Information" }}
        />
        <Stack.Screen
          name="ViewRecentNotifications"
          component={ViewRecentNotifications}
          options={({ navigation }) => ({
            title: " ",
            headerRight: () => (
              <Icon
                raised
                name="user"
                type="font-awesome"
                color="black"
                onPress={()=>navigation.navigate("Profile")}
                
              />
            ),
            headerLeft: () => (
              <Image
                source={{
                  uri:
                    "https://www.notifytechnology.com/wp-content/themes/notify/images/notify-logo.png",
                }}
                style={{
                  width: 100,
                  height: 40,
                  //borderRadius: 40 / 2,
                  marginLeft: 15,
                  // marginRight: 15,
                }}
              />
            ),
          })}
          
        />
        <Stack.Screen
          name="AddNotifications"
          component={AddNotifications}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="DetailsNotification"
          component={DetailsNotification}
          options={{ title: "" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

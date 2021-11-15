import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationNativeContainer } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

//REDUX

import { Provider } from "react-redux";
import store from "./store";

// SCREENS
import LoginScreen from "./screens/Login/Login";
import SignUpScreen from "./screens/SignUp/SignUp";
import HomeScreen from "./screens/Home/Home";
import ContactsScreen from "./screens/Contacts/Contacts";
import PerfilScreen from "./screens/Perfil/Perfil";
import CustomDrawer from "./components/CustomDrawer";
import RecommendationsScreen from "./screens/Recommendations/Recomendaciones";
import MinisterioHelpScreen from "./screens/MinisterioHelp/Ministerio";
import AboutDevelopersScreen from "./screens/AboutDevelopers/About";
import AcomPsiScreen from "./screens/AcomPsi/Acompañamiento";

function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Inicio</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    //  <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: "#AAE8E8",
          drawerActiveTintColor: "black",
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            color: "black",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="people-outline" size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="MIMP"
          component={MinisterioHelpScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="business-outline" size={22} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Acompañamiento"
          component={AcomPsiScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="heart-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Recomendaciones"
          component={RecommendationsScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="bulb-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="body-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="person-add-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutDevelopersScreen}
          options={{
            drawerIcon: (color) => (
              <Ionicons name="help-circle-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

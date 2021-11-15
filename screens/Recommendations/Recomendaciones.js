import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import Modal1 from "../Recommendations/Modal1";
import Modal2 from "../Recommendations/Modal2";
import Modal3 from "../Recommendations/Modal3";
import Modal4 from "../Recommendations/Modal4";
import Modal5 from "../Recommendations/Modal5";
import { ScrollView } from "react-native-gesture-handler";

export default function RecommendationScreen({ navigation }) {
  const Separator = () => <View style={styles.separator} />;

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recomendaciones</Text>
      </View  >
  
        <Modal1 />
        <Separator />
        <Modal2 />
        <Separator />
        <Modal3 />
        <Separator />
        <Modal4 />
        <Separator />
        <Modal5 />
 
    <View style={styles.boton}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Back to Home</Text>
      </TouchableOpacity>
      </View>
    </>
    
  );
}

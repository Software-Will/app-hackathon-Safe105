import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
  Linking,
  Button,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MinisterioHelp() {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleSafe}>Safe105</Text>
        <Text style={styles.titleTecnologias}>
          React Native | Expo | Node.js | FireBase | FontAwesome
        </Text>
        <Text style={styles.aboutSafe}>About Safe105</Text>
        <Text style={styles.definicionAbout}>
          Safe105 nace con la finalidad de salvaguardar la integridad física y
          mental de las mujeres del Perú integrando un sencillo e intuitivo
          sistema de mensajería, asimismo ofrece un apartado con acceso a la
          central de comunicación del MIMP, entre otras funcionalidades.{"\n"}
          El Proyecto Mobile fue desarrollado por estudiantes de la Universidad
          Tecnología del Perú de las carreras de Ingeniería de Sistema e
          Informatica - Ingeniería de Software (6to y 7mo ciclo) como parte del
          evento virtual de la Hackathon UTP - El Comercio 2021.
        </Text>

        <Image
          source={require("../../assets/hackathon2021.png")}
          style={{
            paddingLeft: 400,
            height: 250,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <Text style={styles.developers}>
          Developers{""} <Icon name="github" color="#cdd9e5" size={25} /> |
          Nocom-Pila
        </Text>
        <Text style={styles.contenedorDevelopers}>
          {"-"} Edzon Perez Castillo{"            "}
          <Text
            style={{ color: "#488bd5" }}
            onPress={() => Linking.openURL("https://github.com/Renedz21")}
          >
            @Renedz21
          </Text>
          {"\n-"} Diego Tasayco Pujay{"            "}
          <Text
            style={{ color: "#488bd5" }}
            onPress={() => Linking.openURL("https://github.com/lxDiexl")}
          >
            @lxDiexl
          </Text>
          {"\n-"} William E. Chávez Díaz{"         "}
          <Text
            style={{ color: "#488bd5" }}
            onPress={() => Linking.openURL("https://github.com/Software-Will")}
          >
            @Software-Will
          </Text>
          {"\n-"} Sergio Sanguinetti Queria{"    "}
          <Text
            style={{ color: "#488bd5" }}
            onPress={() =>
              Linking.openURL("https://github.com/sergio-sanguinetti")
            }
          >
            @sergio-sanguinetti
          </Text>
          {"\n-"} Merly Vallejos Huarcaya{"       "}
          <Text
            style={{ color: "#488bd5" }}
            onPress={() => Linking.openURL("https://github.com/MerlyVH")}
          >
            @MerlyVH
          </Text>
        </Text>
      </View>
      </ScrollView>
    </>
  );
}

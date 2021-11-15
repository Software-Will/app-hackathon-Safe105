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
  ScrollView
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MinisterioHelp() {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/ministerioMujer.png")}
          style={styles.imgMinisterio}
        />
        <Text style={styles.title}>CENTRAL DE COMUNICACIONES</Text>
        <Text style={styles.presentacion}>
          Trabajamos para convertir al Perú en un país donde todas y todos
          seamos iguales, vivamos sin discriminación y con igualdad de
          oportunidades.
          {"\n"}
          Atendemos las 24 horas del día, comunicate con nosotros por nuestros
          diversos canales.
        </Text>

        <Text style={styles.titleSedeCentral}>Sede Central</Text>

        <Text style={styles.datosSedeCentral}>
          Jr. Camaná 616{"\n"}Cercado de Lima{"\n"}Perú
          <Text
            style={styles.linkGeolocalizacion}
            onPress={() =>
              Linking.openURL(
                "geo:-12.0424789,-77.0333967?q=Ministerio de la Mujer y Poblaciones Vulnerables"
              )
            }
          >
            {"\n"}Ver Mapa{">"}
          </Text>
        </Text>

        <Text style={styles.titleCorreo}>Correo</Text>

        <Text style={styles.contenidoCorreo}>
          <Text
            style={styles.linkCorreo}
            onPress={() =>
              Linking.openURL(
                "mailto:mesadepartesvirtual@mimp.gob.pe?subject=Safe105-NecesitoAyuda&body=Hola"
              )
            }
          >
            mesadepartesvirtual@mimp.gob.pe
          </Text>
        </Text>

        <Text style={styles.titleTelefono}>Teléfono</Text>
        <Text style={styles.contenidoTelefono}>
          <Text
            style={styles.linkTelefono}
            onPress={() => Linking.openURL("tel:016261600")}
          >
            (01) 6261600
          </Text>
        </Text>

        <Text style={styles.titleDenuncias}>Denuncias</Text>
        <Text style={styles.contenidoDenuncias}>
          <Text
            style={styles.linkDenuncias}
            onPress={() => Linking.openURL("tel:100")}
          >
            100
          </Text>
        </Text>

        <Text style={styles.titleRedesSociales}>Redes Sociales</Text>

        <Text style={styles.contenidoRedesSociales}>
          {"\t\t\t\t\t\t\t\t"}
          <Text
            onPress={() => Linking.openURL("https://www.facebook.com/MimpPeru")}
          >
            <Icon name="facebook" color="#3b5998" size={50} />
          </Text>
          {"\t\t\t\t\t\t"}
          <Text onPress={() => Linking.openURL("https://twitter.com/MimpPeru")}>
            <Icon name="twitter" color="#00acee" size={50} />
          </Text>
          {"\t\t\t\t\t\t"}
          <Text
            onPress={() =>
              Linking.openURL("https://www.instagram.com/Mimpperu/")
            }
          >
            <Icon name="instagram" color="#C13584" size={50} />
          </Text>
          {"\t\t\t\t\t\t"}
          <Text
            onPress={() => Linking.openURL("https://www.youtube.com/MimpTV")}
          >
            <Icon name="youtube" color="#c4302b" size={50} />
          </Text>
        </Text>
      </View>
      </ScrollView>
    </>
  );
}

import React, { useState } from "react";
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
  Modal,
  Pressable,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>NO ESTAS SOLA</Text>
        <Text style={styles.presentacion}>
          Safe105 ofrece los mecanismos necesarios en caso necesites de
          acompañamiento Psicologico profesional.
        </Text>

        <Text style={styles.titleAyudaPer}>Ayuda Personalizada</Text>

        <Text style={styles.datosAyudaPer}>
          En caso de padecer sintomas de ansiedad o depresion comunicate con
          nosotros a traves de nuestro{" "}
          <Text
            style={styles.linkAyudaPer}
            onPress={() =>
              Linking.openURL(
                "whatsapp://send?text=Hola Safe105, Necestio Ayuda!&phone=+51970941145"
              )
            }
          >
            {"Whatsapp"}
          </Text>
          {"."}
        </Text>

        <Text style={styles.titleAyudaUni}>Ayuda Universitaria</Text>
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 17,
            paddingRight: 20,
            textAlign: "justify",
          }}
        >
          Si eres estudiante de alguna universidad, comunicate con su área de
          atención al estudiante y te ofreceran la ayuda necesaria.{"\n"}
        </Text>
        <Text
          style={styles.linkAyudaUni}
          onPress={() =>
            Linking.openURL(
              "https://saeutp.zendesk.com/hc/es/articles/217263846-Cita-Psicol%C3%B3gica"
            )
          }
        >
          Citas Psicológicas UTP
        </Text>

        <Text style={styles.titleGratuita}>Ayuda Gratuita</Text>
        <Text style={styles.contenidoGratuita}>
          El estado peruano a traves de InfoSalud (MINSA) ofrece consejería
          psicológica, comunicate con ellos a traves de la linea gratuita.{"\n"}
        </Text>
        <Text
          style={styles.linkGratuita}
          onPress={() => Linking.openURL("tel:080010828")}
        >
          080010828
        </Text>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.titleRecuerda}>
                  {"🦄 "}Recuerda{" 🦄"}
                </Text>
                <Text style={styles.modalText}>
                  🧠: Si estas acudiendo a terapia y sientes que estas
                  mejorando, no consideres cambiarlo por nuestro proceso
                  acompañamiento.
                  {"\n\n"}❣: No estas sola, siempre existiran personas como
                  nosotros que te haran mejorar tu estado de animo dia tras dia
                  :{")"}
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Esta bien :{")"}</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Recordatorio</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default App;

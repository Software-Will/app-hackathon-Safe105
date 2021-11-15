import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Linking,
} from "react-native";
import styles from "./Styles";

class Modal3 extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Text style={{ fontSize: 30 }}>
                  "Buscar ayuda inmediata"{"\n"}
                  {"\n"}
                </Text>
                El Ministerio de la Mujer y Poblaciones Vulnerables puede ser
                uno de tus aliados porque cuenta con servicios de atención y
                asesoramiento jurídico gratuito y especializado en todas las
                regiones del país. El MIMP garantiza el derecho a la defensa y
                representación gratuita en todos los procesos y procedimientos
                administrativos.
                {"\n"}
                <Text
                  style={{ color: "#488bd5" }}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.gob.pe/institucion/aurora/informes-publicaciones/445099-listado-de-centros-de-emergencia-mujer-cem-en-comisarias"
                    )
                  }
                >
                  "Ver Centro de Emergencia Mujer"
                </Text>
              </Text>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyleModal}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{ marginHorizontal: '5%' }}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>
            ¿Qué puedo hacer si soy víctima de violencia por parte de mi pareja?
          </Text>
        </Pressable>
        </View>
      </View>
    );
  }
}

export default Modal3;

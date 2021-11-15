import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styles from "./Styles";

class Modal4 extends Component {
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
                  "Claro que sí"{"\n"}
                  {"\n"}
                </Text>
                La Ley garantiza la protección de los datos personales (incluido
                el domicilio) de la víctima, de los de sus descendientes y de
                los de cualquier otra persona que esté bajo su guarda o
                custodia. Razón por lo cual es idóneo usar en los procesos
                legales reportar solo el Domicilio Procesal.
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
              Si me voy de mi casa y presento denuncia ¿puedo ocultar mi nuevo
              domicilio?
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Modal4;

import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styles from "./Styles";

class Modal5 extends Component {
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
              <Text style={styles.modalText, {textAlign: "justify", fontSize:20, marginBottom:15}}>
                <Text style={{ fontSize: 30 }}>
                  "Las pruebas son importantes"{"\n"}
                  {"\n"}
                </Text>
                • Documentos de carácter médico (historia clínica, recetas,
                informe psicológico/psiquiatrico).{"\n"}• Testimonio de personas que
                hayan presenciado situaciones de maltrato.{"\n"}• Si existen mensaje
                de voz o texto, deberán transcribirse y presentarse al juzgado.
                {"\n"}• Si no cuenta con niguna prueba, el Ministerio Público deberá
                hacerle una evaluación psicológica para valorar el daño
                psíquico.
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
        <View style={{ marginHorizontal: '5%'}}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>
            ¿Qué tipo de pruebas puedo aportar si estoy sufriendo maltrato
            psicológico?
          </Text>
        </Pressable>
      </View>
      </View>
    );
  }
}

export default Modal5;

import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styles from "./Styles";

class Modal1 extends Component {
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
                  "Mantenerse alerta y determinar si me siguen realmente"{"\n"}
                  {"\n"}
                </Text >
                Da igual lo que estés haciendo como salir a correr, dar un
                paseo, sacar al perro. Si te encuentras solo, hay que estar
                alerta pero manteniendo la calma. Lo primero que debemos hacer
                es asegurarnos que alguien nos está siguiendo. Con calma, mira
                alrededor, también hacia atrás de vez en cuando. Al igual que
                nos hemos dado cuenta que alguien nos puede estar siguiendo, hay
                que cerciorarse de que no se trate solo de alguna coincidencia.
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
        <View style={{ }}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={styles.textStyle}>
              ¿Que hacer si creo que me están siguiendo?
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Modal1;

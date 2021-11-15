import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styles from "./Styles";

class Modal2 extends Component {
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
                                    "Denuncia"{"\n"}
                                    {"\n"}
                                </Text>
                                Esto es molesto y vergonzoso, pero es imprescindible por lo
                                siguiente: la atención médica estará dirigida a atender las
                                heridas, al tiempo que se aclararán dudas sobre la probabilidad
                                de embarazo (en las mujeres) y de enfermedades de transmisión
                                sexual. La denuncia ante las autoridades judiciales inicia la
                                búsqueda del responsable, pero también establece el antecedente
                                del evento, que puede ser importante con posterioridad
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
                <View style={{ marginHorizontal:'5%'}}>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => this.setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>
                            ¿Qué hacer si fui víctima de violación?
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

export default Modal2;

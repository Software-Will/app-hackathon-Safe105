import React, { Children, useState } from 'react';
import { StyleSheet, Modal, View, Text , Dimensions, Pressable} from 'react-native';


const ModalExpo = ({ modalVisible }) => {

    const [modalOcultar, setModalOcultar] = useState(false);

    return ( 
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalOcultar(!modalOcultar);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
 

     );
}
 
export default ModalExpo;

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView:{
      minWidth: Dimensions.get('window').width - 100,
      backgroundColor: '#FFF',
      borderRadius:4,
      padding: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      }
    },
  });
  
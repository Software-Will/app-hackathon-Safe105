import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList , Input, Pressable, Modal, PermissionsAndroid} from 'react-native';

import BasicButton from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';
import { Icon } from 'react-native-elements';
import { useFormik } from 'formik';
// import Contacts from 'react-native-contacts';

//FIREBASE 

import {  signInWithEmailAndPassword } from 'firebase/auth'
  
import { auth , db } from '../../firebase';
import 'firebase/storage';
import 'firebase/firestore';


// const db = auth.firestore(auth);

import validationSchema from './schema';

import styles from './styles';


export default function ContactScreen() {

   

   





  const [arregloContactos, setArregloContactos] = useState({});

  const [contactos, setContactos] = useState({})


  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');





const onSubmit = (e) => {
  // e.PreventDefault();

  
  // console.log(nombe);
//   db.collection("contacts").add({ name : nombre, phone: numero}).then(() => {
//     alert('Contacto añadido correctamente');

//   }).catch(() => {
//     alert('Error');
//  });
      const submit = {
          name: nombre,
          numero:numero
      }

      setArregloContactos(submit);

      console.log(arregloContactos);
  
                    
      setContactos([...contactos, contactos])

      console.log(contactos);

// console.log(submit);



  // const dbContacts  = { name: values.nombre, numero: values.numero }

  // console.log(dbContacts);

  // auth.collection("contacts").add({ name: values.nombre, numero: values.numero}).then(() => {
  //   alert("El contacto fue creado")
  // }).catch(() => {
  //     alert('error')
  // })
   



  } 


  const [modalVisible, setModalVisible] = useState(false);





  const listacontactos = [
    {"id":1,"nombre":"John", "numero":"9349123412"},
    {"id":2,"nombre":"Anna", "numero":"9123123122"},
    {"id":3,"nombre":"Peter", "numero":"941231231"}
  ];


  




  return (
      <>
      <View style={styles.Container}>
         <Text style={styles.textHeader}>Agrega a tus contactos de  confianza</Text>
          <BasicButton
            style={styles.añadir}
            title={'Añadir un contacto'}
            width={200}
            onPress={() => setModalVisible(true)}
            // disabled={!isValid || isSubmitting}
            // loading={isSubmitting}
      />
  
 
        
        <FlatList
           style={styles.ContainerText}
           data={listacontactos.filter(x => x.id === x.id)}
           keyExtractor={x => String(x.numero)}
           renderItem={({ item  })   => <Text style={styles.text}> {item.nombre}  -  {item.numero} <Icon
           style={styles.icon}
           name='trash'
           type='evilicon'
           color='#C0392B'
           onPress={ () => alert('Borrar'+item.id)}
         /></Text>} />

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
            <BasicInput
              placeholder={'Nombre contacto'}
              iconName="user"
              iconSize={20}
              onChangeText={setNombre}
              value={nombre}
              // errorMessage={touched.nombre && errors.nombre}
            />
              <BasicInput
              placeholder={'Número de celular'}
              iconName="user"
              iconSize={20}
              onChangeText={setNumero}
              value={numero}
              // errorMessage={touched.numero && errors.numero}
            />
            <Icon
           style={styles.icon}
           name='plus'
           type='evilicon'
           color='#C0392B'
           onPress={ () => alert('Añadir de contactos')}/>

          <BasicButton
              title={'Añadir'}
              width={200}
              // style={[styles.button, styles.buttonSubmit]}
              onPress={onSubmit}
              // disabled={!isValid || isSubmitting}
              // loading={isSubmitting}
            
            />
           
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
       }
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      */}
          


      </View>
      </>
  )
};


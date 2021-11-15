import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList , Input, Pressable, Modal, PermissionsAndroid} from 'react-native';

import BasicButton from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';
import { Icon } from 'react-native-elements';
import { useFormik } from 'formik';
// import Contacts from 'react-native-contacts';


import validationSchema from './schema';

import styles from './styles';


export default function PerfilScreen() {

    

//  useEffect(() => {
//     componentDidMount();
//  }, []);


//   const componentDidMount = async () => {
//      if (Platform.OS === "android") {
//       PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//         title: "Contacts",
//         message: "This app would like to view your contacts."
//       }).then(() => {
//         loadContacts();
//       });
//     } else {
//       loadContacts();
//     }
//   }

//     function loadContacts() {
//     Contacts.getAll()
//       .then(contacts => {
//         // this.setState({ contacts, loading: false });
//         console.log(contacts);
//       })
//       .catch(e => {
//         // this.setState({ loading: false });
//               console.log('salio mal');
//       });

//     Contacts.getCount().then(count => {
//       // this.setState({ searchPlaceholder: `Search ${count} contacts` });
//       console.log('Cantidad:'+count);
//     });

//     Contacts.checkPermission();
//   }



const onSubmit = values => {
   setTimeout(() => {
          alert('Número añadido correctamente');
   }, 3000);
}


  const [modalVisible, setModalVisible] = useState(false);

  const initialValues = {
    nombre: '',
    numero: '',
  };
      
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });
    
      const {
        values,
        touched,
        errors,
        handleChange,
        isSubmitting,
        isValid,
        handleSubmit,
      } = formik;

      const  perfil = [
        {"id":1,"nombre":"Maria Perea","dni":'72149211',"telefono":'934144211',"email":'mariaperea@hotmail.com'},
        
     ];


  const mesajespredeterminados = [
    {"nr":1,"mensaje":"Me estan siguiendo"},
    {"nr":2,"mensaje":"Me han atacado"},
    {"nr":3,"mensaje":"Temo por mi vida"},

  ];


  


  
// const fechContactos =  async () => {
//     const response = await fetch(mesajespredeterminados)
//      const data = await response.json()
//      setContactos(data)
//      setLoading(false)
// } 

  // useEffect(() => {
  //   fechContactos()
  // }, [])

  // let x;
  // for (x of mesajespredeterminados) {
  //   console.log(x.nombre + ' ' + x.numero);
  // }

  return (
      <>
      <View style={styles.Container}>
         <Text style={styles.textHeader}>PERFIL</Text>
          <BasicButton
            style={styles.añadir}
            title={'Editar'}
            width={200}
            onPress={() => setModalVisible(true)}
            // disabled={!isValid || isSubmitting}
            // loading={isSubmitting}
      />

        <FlatList
           style={styles.ContainerText}
           data={perfil.filter(x => x.id === x.id)}
           keyExtractor={x => String(x.id)}
           renderItem={({ item  })   => <Text style={styles.text}> Nombre: {item.nombre} {"\t"} - DNI: {"\t"} {item.dni} {"\t"} Telefono {item.telefono} - Email: {item.email}<Icon
           style={styles.icon}
           name='trash'
           type='evilicon'
           color='#C0392B'
           onPress={ () => alert('Borrar'+item.id)}
         /></Text>} />
  
 
       <Text style={styles.perfil}>Mensajes de Emergencía</Text>
        <FlatList
           style={styles.ContainerCard}
           data={mesajespredeterminados.filter(x => x.nr === x.nr)}
           keyExtractor={x => String(x.nr)}
           renderItem={({ item  })   => <Text style={styles.text}> {item.mensaje} <Icon
           style={styles.icon}
           name='trash'
           type='evilicon'
           color='#C0392B'
           onPress={ () => alert('Borrar'+item.nr)}
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
              onChangeText={handleChange('nombre')}
              value={values.nombre}
              errorMessage={touched.nombre && errors.nombre}
            />
              <BasicInput
              placeholder={'Número de celular'}
              iconName="user"
              iconSize={20}
              onChangeText={handleChange('numero')}
              value={values.numero}
              errorMessage={touched.numero && errors.numero}
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
              onPress={handleSubmit}
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
            
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
      </View>
      </>
  )
};


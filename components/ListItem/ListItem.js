import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
         container: {
             paddingHorizontal:15,
             height: 60,
             justifyContent: 'center',
             borderBottomWidth: 1,
             borderBottomColor: '#eee',
         },
         text:{
             fontSize:18
         }
});

const Listitem = ({ item }) => {
    return (  
         <>
          <Text style={styles.text}>{item.nombre}</Text>
          <Text style={styles.text}>{item.numero}</Text>
         </> 
     
    );
}
 
export default Listitem;
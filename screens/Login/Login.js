import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { useFormik } from 'formik';
import BasicButton from '../../components/BasicButton';
import validationSchema from './schema';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


// const navigation = useNavigation();

//FIREBASE
  
import {  signInWithEmailAndPassword } from 'firebase/auth'
  
import { auth } from '../../firebase';



const initialValues = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {

  const [usuario, setUsuario] = useState([]);

  async function onSubmit(values) {
    try {

      const user = await signInWithEmailAndPassword(auth, values.email, values.password);
      // console.log('logued with: ', user);
  
      setTimeout(() => {
         setUsuario(user);
         navigation.navigate('Home', user.user);
      }, 3000);

    } catch (error) {
      console.log(error.message);
      alert('Error al iniciar sesión');
    }
  }

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


  return (

    <View style={styles.Container}>
      <LinearGradient

        colors={['#aaf2d7', 'transparent']}

        style={styles.background}

      />
      <Image source={require('../../assets/safe105.png')} style={styles.img} />
      <Text style={styles.text}>Bienvenidos</Text>
      <Text style={styles.textabajo}>Inicia sesion con tu cuenta</Text>
      <TextInput style={styles.input}
        placeholder={'Ingresa tú email'}
        iconName="envelope"
        iconSize={16}
        onChangeText={handleChange('email')}
        value={values.email}
        errorMessage={touched.email && errors.email}
      />
      <TextInput style={styles.input}
        placeholder={'Ingresa tú contraseña'}
        iconName="lock"
        iconSize={22}
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}
        errorMessage={touched.password && errors.password}
      />
      <Text style={styles.forgot}>Olvidaste tu contraseña?</Text>
      <View style={styles.boton}>
        <BasicButton
          title={'Ingresar'}
          width={200}
          onPress={handleSubmit}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        />
      </View>
      <View style={styles.SignUp}>
        <BasicButton
          title={"No tienes una cuenta? Registrate"}
          onPress={() => navigation.navigate('SingUp')}
          color="transparent"
          type="clear"
        />
      </View>

    </View>

  );
};

export default LoginScreen;
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useFormik } from 'formik';

import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/BasicButton';
import { StyleSheet } from 'react-native';
import validationSchema from './schema';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
const initialValues = {
  nombres: '',
  dni: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const SignUpScreen = ({ navigation }) => {
  const onSubmit = values => {
    setTimeout(() => {
      navigation.navigate('Confirm');
    }, 3000);
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


  return (
    <ScrollView style={styles.Container}>
      <LinearGradient

        colors={['#DBF5F3', '#DBF5F3']}

        style={styles.background}

      />
      <BasicInput
        placeholder={'Ingresa tu nombre completo'}
        iconName="user"
        iconSize={20}
        onChangeText={handleChange('nombres')}
        value={values.nombres}
        errorMessage={touched.nombres && errors.nombres}
      />
      <BasicInput
        placeholder={'Ingresa tu DNI'}
        iconName="user"
        iconSize={20}
        onChangeText={handleChange('dni')}
        value={values.dni}
        errorMessage={touched.dni && errors.dni}
      />
      <BasicInput
        placeholder={'Ingresa tú email'}
        iconName="envelope"
        iconSize={20}
        onChangeText={handleChange('email')}
        value={values.email}
        errorMessage={touched.email && errors.email}
      />
      <BasicInput
        placeholder={'Ingresa tu número'}
        iconName="phone"
        iconSize={20}
        onChangeText={handleChange('celular')}
        value={values.celular}
        errorMessage={touched.celular && errors.celular}
      />
      <BasicInput
        placeholder={'Ingresa tú contraseña'}
        iconName="lock"
        iconSize={24}
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}
        errorMessage={touched.password && errors.password}
      />
      <BasicInput
        placeholder={'Confirma tu contraseña'}
        iconName="lock"
        iconSize={24}
        secureTextEntry
        onChangeText={handleChange('password_confirmation')}
        value={values.password_confirmation}
        errorMessage={
          touched.password_confirmation && errors.password_confirmation
        }
      />
      <View style={{ alignItems: 'center', marginTop: -20, }}>
        <BasicButton
          title={'Registrarme'}
          width={200}
          onPress={handleSubmit}
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        />
      </View>
      <View style={styles.SubContainerButton}>
        <BasicButton
          title={'Ya tienes una cuenta? Ingresa aquí'}
          onPress={() => navigation.navigate('Login')}
          color="transparent"
          type="clear"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
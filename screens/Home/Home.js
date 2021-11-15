import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  Linking,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";
import BasicButton from "../../components/BasicButton";

//REDUCERS

// import {useDispatch} from 'react-redux';
import { obtenerAutenticacion } from "../../actions/loginActions";

export default function HomeScreen({ route }) {
  const handlePress = (text) => {
    alert(text);
  };

  // const dispatch = useDispatch();

  console.log(obtenerAutenticacion);

  //   const { email } = route.params;

  // console.log(email);

  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg("Error!");
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("La app necesita los permisos para funcionar");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Esperando";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const numeros = ["+51970941145"];

  console.log(location);

  const enviarMensaje = (numero) => {
    return Linking.openURL(
      `whatsapp://send?text=PAPÁ, Necesito Ayuda! mi ubicación es ${location}, me siento en peligro: &phone=${numero}`
    );
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {location.coords ? (
          <Marker
            coordinate={location.coords}
            title="Ubicación"
            descripcion="Descripcion del punto"
          />
        ) : null}
      </MapView>
      <Button
        style={{ padding: 20 }}
        title="MANDAR ALERTA"
        onPress={() => numeros.forEach(enviarMensaje)}
        color="#CB4335"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "95%",
    height: "90%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

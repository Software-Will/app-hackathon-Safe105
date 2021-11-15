import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: "#cc8f94",
  },
  presentacion: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 8,
    fontSize: 18,
    lineHeight: 24,
    textAlign: "justify",
  },
  titleAyudaPer: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 20,
  },
  datosAyudaPer: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "justify",
    fontSize: 17,
  },
  linkAyudaPer: {
    color: "#3E2CC3",
    paddingLeft: 20,
  },
  titleAyudaUni: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  linkAyudaUni: {
    color: "#3E2CC3",
    paddingLeft: 20,
    fontSize: 17,
  },
  titleTelefono: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  contenidoTelefono: {
    paddingLeft: 20,
    fontSize: 17,
  },
  linkTelefono: {
    color: "#3E2CC3",
    paddingLeft: 20,
  },
  titleRecuerda: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  contenidoRecuerda: {
    fontWeight: "bold",
    color: "#333",
    paddingLeft: 20,
    fontSize: 17,
  },
  titleGratuita: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  contenidoGratuita: {
    color: "#333",
    fontSize: 17,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "justify",
  },
  linkGratuita: {
    color: "#3E2CC3",
    fontSize: 17,
    paddingLeft: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 20,
    paddingBottom: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#E1306C",
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: "#833AB4",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 10,
    marginBottom: 15,
    textAlign: "justify",
    fontSize: 17,
  },
});

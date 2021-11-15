import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop:60,
    paddingLeft:  30,
    paddingRight: 30,
  },
  textHeader:{
      padding: 18,
      fontSize: 32,
      color:'#C39BD2'
      
  },
  SubContainerButton: {
    marginTop: 15,
  },
  añadir:{
    display: 'flex',
    marginTop: 35,
    paddingBottom: 20,
    paddingLeft:20
  
  },
  ContainerCard: {
     paddingTop:90,   
  },
  text: {
    fontSize:22,
    color:'#85929E',
    
  },
  icon:{
    fontSize:28
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: 300,
    height: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonSubmit: {
    backgroundColor: "#C39BD2",
    marginTop: 40,
    width: '100%'
  },
  buttonClose: {
    backgroundColor: "#C39BD2",
    marginTop: 10,
    width: '100%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
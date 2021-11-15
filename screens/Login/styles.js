import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#9498d6',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  SignUp: {
    marginTop: 10,
    color: '#C39BD3'
  },
  text:{
      fontSize: 60,
      color:'black',
      fontWeight:'bold',
  },
  textabajo:{
      fontSize: 20,
      color:'green',
      marginBottom:10,
      fontWeight:'bold',
  },

  input:{
    padding:10,
    paddingStart:30,
    width:'80%',
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor: '#fff'
    
  },
  boton:{
    paddingTop:10,
  },
  img:{
    width:220,
    height:220
  },
  forgot:{
    fontSize: 15,
      color:'white',
      marginTop:10
  },
  background: {

    position: 'absolute',

    left: 0,

    right: 0,

    top: 0,

    height: 800,

  },
});
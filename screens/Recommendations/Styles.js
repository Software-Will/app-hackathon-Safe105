import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ff8993",
        width: "100%",
        height: "100%",
        marginTop:40
    },

    titleContainer: {
        flex: 1,
        marginTop:-25,
        marginBottom:5,
        alignItems: "center",
    },

    centeredView: {
        flex: 1,
        maxWidth:'100%',
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        
    },

    modalView: {
        margin: 20,
        backgroundColor: "rgba(255,255,255,0.80)",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
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
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginStart:0
        
    },
    buttonOpen: {
        backgroundColor: "darkseagreen",
        width:'90%'
    },
    buttonClose: {
        backgroundColor: "#dc143c",
        
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        alignItems:'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
    },

    textStyleModal: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },

    separator: {
        marginVertical: 5,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },

    container: {
        alignItems: "center",
        backgroundColor: "palevioletred",
        borderRadius: 20,
        padding: 15,
        justifyContent: "center",

        elevation: 20,
        marginTop: 10,
        marginBottom:10
    },
    boton:{
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'center'

    }
});

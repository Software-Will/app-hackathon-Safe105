import React from "react";
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props} c
                ontentContainerStyle={{ backgroundColor: '#c3f0e1' }}>
                <ImageBackground
                    source={require('../assets/mujer.png')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../assets/safe105.png')}
                        style={{ height: 100, width: 100, borderRadius: 30, marginBottom: 10, }} />

                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc',backgroundColor:'white'}}>
                <TouchableOpacity onPress={() => { }}  >
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Ionicons name="log-in-outline" size={22} />
                        <Text style={{ fontSize: 20, marginLeft: 5 }}>Salir</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer
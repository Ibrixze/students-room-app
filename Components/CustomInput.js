import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text, Platform, TextInput, TouchableOpacity, Button, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"

const {width, height} = Dimensions.get("window") 

export default function CustomInput(params){

    // console.log(titre)
    return(
        <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
            <Icon color="#eb6e5d" name={params.icon.name} size={(width+height)/40} style={{flex:1}}/>
            <TextInput onEndEditing={params.on_end_editing} onChangeText={params.on_change_text} onFocus={params.on_focus} style={styles.ville, params.focus} secureTextEntry={params.titre.content=="password"?true:false} placeholder = {params.titre.content} placeholderTextColor="#2d6793"/>
        </View>
    )

}


const styles = StyleSheet.create({

    ville:{
        //borderWidth : 1,
        //marginTop: 20,
        fontSize : 18,
        height: 50,
        borderRadius:20,
        padding: 10,
        margin:5,
        backgroundColor: "#f7f7f7",
        borderWidth : (params.focus)?1:"",
        borderColor : (params.focus)?"#2d6793":"",
        flex:8
      }
})
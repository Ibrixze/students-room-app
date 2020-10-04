import React from "react"
import { View, StatusBar, StyleSheet, Text } from "react-native"



export default function Header(){
    return(
        <View style={styles.header}>
          <Text style={{fontSize : 25, fontWeight: "bold", color:"#2d6793"}}>PARAMETRE</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    header:{
        //flex: 1,
        paddingTop : Platform.OS=="android"?StatusBar.currentHeight:0,
        fontSize: 25,
        fontWeight: "bold",
        textTransform : "uppercase",
        padding : 20
      }
})
import { StatusBar } from 'expo-status-bar';
import React from 'react';
    import { Image, StyleSheet, View, FlatList, Text, Platform, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons" 



export default class MyPost extends React.Component{
    render(){
        console.log(this.props)
        return(
            <View style={styles.main_container}>
                <View style={styles.post_pic}>
                    <Image source={{uri:this.props.post.images}}/>
                </View>
                <View style={styles.post_description}>   
                    <Text style={styles.address}>{this.props.post.address}</Text>
                    <Text style={styles.prix}>{this.props.post.prix}</Text>    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main_container:{
        //backgroundColor:"#fff",
        height: 100,
        borderBottomWidth: 1,
        borderRadius: 20,
        borderColor : "#f0f0f0",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center" 
    }, 
    address:{
        fontSize: 16,
        color: "#2d6793"
    },
    prix : {
        fontSize: 16,
        color: "#eb6e5d"
    },
    post_pic:{
        width:"100%",
        height:"100%",
        flex : 2,
        //borderWidth:1,
        marginRight: 10,
        backgroundColor:"#f0f0f0"
    },
    post_description:{
        flex : 7
    }
})
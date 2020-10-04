import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const {width, height} = Dimensions.get("window")
export default class PostCategory extends React.Component{
    
    render(){
        return(
            <TouchableOpacity style={{width: width/3}} onPress={()=>{
                console.log("Tags clicked!")
            }}>
                <Text style={styles.tags}>{this.props.category.titre}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({

    tags:{
        width: width/3,
        margin: 10,
        height:40,
        padding : 10,
        borderRadius: 20,
        backgroundColor:"#fff",
        color:"#2d6793",
        textAlign:"center",
        // flex:1,
    }
})
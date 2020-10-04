import React from 'react';
import {Pressable , StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, TouchableWithoutFeedbackBase, Button, TouchableOpacityBase, TouchableWithoutFeedback } from 'react-native';
import { TouchableNativeFeedback, BorderlessButton } from 'react-native-gesture-handler';



export default class Bouton extends React.Component{
  render(){
    const titre = this.props.titre
    const call = this.props.call
    const longPress = this.props.longPress
    return(
      <TouchableNativeFeedback delayLongPress={1000} onPressIn={longPress} onPress={call} >
        <View style={styles.bouton}>
          <Text style={styles.titre}>{titre}</Text>
        </View>
      </TouchableNativeFeedback> 
    )
  }
}
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({

  bouton : {
    borderRadius: 20,
    paddingVertical : 15,
    paddingHorizontal: 10,
    backgroundColor: "#eb6e5d",
    height: 50,
    // width: width+,
    marginTop: 10

  },
  titre:{
    color:"#fff",
    fontWeight:"bold",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase"
  }
})

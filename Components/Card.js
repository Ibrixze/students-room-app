//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';


class Card extends React.Component{

  render(){
    const post = this.props.post
    const displayPostDetails = this.props.displayPostDetails
    //console.log(post)
    return(
        <TouchableOpacity style={styles.container} onPress={() => displayPostDetails(post)}>
          <View style={styles.container_pic}>  
            <Image source = {{uri : post.images}} />
          </View>  
          <View style={styles.description}>
              <Text style={styles.container_text}>{post.category.titre +", "+ post.address}</Text>
              <Text style={styles.container_text, styles.container_price}>{post.prix} Dhs</Text>
          </View>
        </TouchableOpacity>
    )
  }
}
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container:{
    "backgroundColor": "#fff",
    //"borderWidth": 1,
    "padding" : 5,
    //borderWidth : 1,
    "borderRadius" : 20,
    "marginTop": 10,
    "width": width,
    "flex": 1
  },
  container_pic : {
      "borderTopLeftRadius": 20,
      "borderTopRightRadius": 20,
      "width": width,
      "height": 200,
      "flex": 3,
      //"backgroundColor" : "gray"
  },
  container_text : {
    "marginTop" : 10,
    "fontSize" : 16,
    "color": "#2d6793"
  },
  container_price : {
    "color" : "#eb6e5d",
    "marginTop" : 10,
    "fontSize" : 16
  },
  description:{
    "flex": 1,
    "marginLeft":10,


  }
})

export default Card;

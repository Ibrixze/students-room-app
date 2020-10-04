import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View, FlatList, Text, Platform, TextInput, TouchableOpacity, Button, DatePickerAndroid, Picker, ImagePickerIOS } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons"
import Bouton from "./Bouton.js"
import CustomInput from './CustomInput.js';
import { Provider, connect, useStore } from 'react-redux'
import {getDatasFromApi} from "../API/StudentRoomApi"
class AddPosts extends React.Component{
  constructor(props){
    super(props)
    this.address = ""
    this.category_id = 1
    this.prix = ""
    this.description = ""
    this.images = "replcer apres"
    this.state = {
      user : [],
      userPosts : [],
      category : [],
      rechargement : 1,
      message : "",
      isLoading : false
    }
  }

  loader(){
    if(this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
  }
  _getUser(data){
    this.setState({ user : data})
  }

  _getAddress(valeur){
    this.address = valeur
  }
  _getCategory(valeur){
    /* recuperer l'id de la catégorie depuis la liste des categories */
    (this.state.category).map((element, key) => {
      if(element == valeur)
        this.category_id = key
    })
  }
  _getPrix(valeur){
    this.prix = valeur
  }
  _getDescription(valeur){
    this.description = valeur
  }
  // _getName(valeur){
  //   this.prenoms = valeur
  // }

  _poster(){
    if(this.props["user"][0] === undefined){
      
      this.setState({ message : "Vous devez vous connecter pour poster une annonce"})
    }else{
      this.setState({isLoading : true})
      const params = {
        "address" : this.address,
        "prix" : this.prix,
        "description" : this.description,
        "images" : this.images,
        "user" : "apip/users/" + this.props["user"][0].id,
        "categories" : "apip/categories/" + this.category_id
         
      }
      getDatasFromApi("post", "post", params).then(data => (data==null)?this.setState({ isLoading :false ,userPosts : [], message : "Une erreur est survenue lors du post" }):this.setState({ isLoading : false, userPosts : data, message : "Annonce postée !" }))
    }

  }

  render(){
    if(this.state.categories === []){
      getDatasFromApi("categories", "get", null).then(data => this.setState({ categories : data }))
    } 
    console.log(this.state.message)  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize : 25, fontWeight: "bold", color:"#2d6793"}}>AJOUTER UN POST</Text>
        </View>
        <View style={styles.main_container}>
          <ScrollView>
            <TouchableOpacity style={styles.adds}>
              <Icon style={styles.adds_icon} name="plus" size={50}/>
            </TouchableOpacity>
            <Text style={styles.add_text}>Ajouter une photo</Text>
            <CustomInput
              on_end_editing={(text) => this._getAddress(text)}
              on_change_text={(text) => this._getAddress(text)}
              on_focus={() => this.setState({ rechargement : this.state.rechargement + 1 }) }
              titre={{"content" : "Quartier, Ville"}} icon={{"name": "instagram"}} />
            <CustomInput
              on_end_editing={(text) => this._getPrix(text)}
              on_change_text={(text) => this._getPrix(text)}
              titre={{"content" : "Prix (Le prix doit être en Dirhams)"}} icon={{"name": "creditcard"}} />
            <CustomInput
              on_end_editing={(text) => this._getCategory(text)}
              on_change_text={(text) => this._getCategory(text)}
              titre={{"content" : "Catégorie"}} icon={{"name": "tag"}} />
            <CustomInput
              on_end_editing={(text) => this._getCategory(text)}
              on_change_text={(text) => this._getCategory(text)}
              titre={{"content" : "Description"}} icon={{"name": "instagram"}} />
            <View>
              <Bouton titre="poster" call={()=> {
                  this.setState({
                    user : []
                  }, () => this._poster())          
              }} />
            </View>
            <Text>{this.state.message}</Text>
            {this.loader()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 30,
    backgroundColor: "#f0f0f0"
    //justifyContent: "center"
  },
  header:{
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    padding:10,
    borderRadius: 20,
    justifyContent: "center"
  },
  main_container:{
    flex: 11,
    backgroundColor: "#fff",
    margin: 10,
    padding:10,
    borderRadius: 20
  },
  adds:{
    backgroundColor:"#f0f0f0",
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  add_text:{
    color : "#2d6793"
  },
  adds_icon:{
    color: "#eb6e5d"
  },
  ville:{
    //borderWidth : 1,
    //marginTop: 20,
    height: 50,
    borderRadius:20,
    padding: 10,
    backgroundColor: "#f7f7f7",
    flex:11
  },
  loading_container : {
    position : "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems : "center",
    justifyContent : "center"
  }

})
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AddPosts)
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  ActivityIndicator ,Dimensions ,Image, StyleSheet, ScrollView, View, FlatList, Text, Platform, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import {getDatasFromApi} from "../API/StudentRoomApi"
import MyPost from "./MyPost"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Provider, connect } from 'react-redux'
import Store from "../Store/configureStore"
import CustomInput from './CustomInput'
import Bouton from './Bouton';
//import users from "../Helpers/UsersData"
/* TRANSFORMER TOUTES LES VUES D INPUT EN COMPOSANT, ANSI QUE LES HEADER ET AUTRES...*/

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.email = ""
    this.password = ""
    this.nom = ""
    this.want_sign = "Vous n'avez pas de compte? Maintenez bouton  pour vous inscrire"
    this.have_account = "Déjà inscris? Maintenez le bouton pour vous connecter"
    this.prenoms = ""
    this.contact = ""
    this.state ={
      userInfo : null,
      isConnected : false,
      render : true,
      message_connection : "",
      action : 1, //Compteur pour changer de vue entre la connexion/inscription 
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

  // componentWillUpdate(){

  // }

  compenentDidUpdate(){
    
  }

  componentDidMount(){
    setInterval(()=> {
      if(this.props.user[0] == undefined && this.state.isConnected == true){
        this.setState({ isConnected : false })
      }
    }, 3000)
  }

  // componentWillMount(){

  // }

  
  // _loadUser(){
  //   getDatasFromApi("users", "get", 1).then(data => this.setState({ userInfo : data }))
  // }
  getUser(email, password){
    console.log("appélé")
    user_get = ""
    email = email.toString()
    password = password.toString()
    email = email.trim()
    password = password.trim()          
    console.log("Les parametres envoyé à getUser : =====" + email +"==== ===="+ password+"====")    
    const users = [
      {
        "@id": "/apip/users/1",
        "@type": "Users",
        "id": 1,
        "nom": "Traoré",
        "prenoms": "Ibrahim",
        "email": "traoreibrahim309@gmail.com",
        "password": "jenesaispas",
        "contact": "+212766548095",
        "posts": [
          {
              "@id": "/apip/posts/1",
              "@type": "Post",
              "id": 1,
              "address": "La gironde, Casablanca",
              "prix": "2500",
              "images": "https://imganuncios.mitula.net/medium/appartement_a_louer_a_casablanca_9100127574352119175.jpg",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "category": {
                  "@id": "/apip/categories/2",
                  "@type": "Category",
                  "id": 2,
                  "titre": "Chambre"
              }
          },
          {
              "@id": "/apip/posts/6",
              "@type": "Post",
              "id": 6,
              "address": "Maarif, Casablanca",
              "prix": "7200",
              "images": "blalaballaa",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          },
          {
              "@id": "/apip/posts/8",
              "@type": "Post",
              "id": 8,
              "address": "Cocody, Abidjan",
              "prix": "2000",
              "images": "replcer apres",
              "description": "",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          },
          {
              "@id": "/apip/posts/9",
              "@type": "Post",
              "id": 9,
              "address": "Cocody, Abidjan",
              "prix": "2000",
              "images": "replcer apres",
              "description": "",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          },
          {
              "@id": "/apip/posts/10",
              "@type": "Post",
              "id": 10,
              "address": "Cocody Angre, Abidjan",
              "prix": "2000",
              "images": "replcer apres",
              "description": "",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          },
          {
              "@id": "/apip/posts/11",
              "@type": "Post",
              "id": 11,
              "address": "Cocody Angre, Abidjan",
              "prix": "2000",
              "images": "replcer apres",
              "description": "",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          }
      ]
  },
  {
      "@id": "/apip/users/2",
      "@type": "Users",
      "id": 2,
      "nom": "Sylla",
      "prenoms": "Kevin",
      "email": "kevinsylla@gmail.com",
      "password": "12345",
      "contact": "+212677450859",
      "posts": [
          {
              "@id": "/apip/posts/2",
              "@type": "Post",
              "id": 2,
              "address": "Chimicolor, Casablanca",
              "prix": "5000",
              "images": "https://www.sarouty.ma/property/63ed57d7feba3c136d66c472ff8269a3/260/185/MODE/b244fa/763015-2e7c2o.jpg?ctr=ma",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          },
          {
              "@id": "/apip/posts/4",
              "@type": "Post",
              "id": 4,
              "address": "Avenue Mohammed 5, Casablanca",
              "prix": "2000",
              "images": "https://imganuncios.mitula.net/medium/appartement_a_louer_a_casablanca_9100127574352119175.jpg",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
              "category": {
                  "@id": "/apip/categories/2",
                  "@type": "Category",
                  "id": 2,
                  "titre": "Chambre"
              }
          }
      ]
  },
  {
      "@id": "/apip/users/3",
      "@type": "Users",
      "id": 3,
      "nom": "Gbeu",
      "prenoms": "Landry",
      "email": "gbeullandry@gmail.com",
      "password": "123456",
      "contact": "+212677941654",
      "posts": [
          {
              "@id": "/apip/posts/3",
              "@type": "Post",
              "id": 3,
              "address": "Oulfa, Casablanca",
              "prix": "1000",
              "images": "https://www.sarouty.ma/property/756f4227c6c65c4064c6b05c3580e384/260/185/MODE/e53fc7/769280-a5f0ao.jpg?ctr=ma",
              "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "category": {
                  "@id": "/apip/categories/2",
                  "@type": "Category",
                  "id": 2,
                  "titre": "Chambre"
              }
          }
      ]
  },
  {
      "@id": "/apip/users/4",
      "@type": "Users",
      "id": 4,
      "nom": "Traoré",
      "prenoms": "Junior",
      "email": "juniortraore@gmail.com",
      "password": "12345678",
      "contact": "+212 677 444 820",
      "posts": []
  },
  {
      "@id": "/apip/users/5",
      "@type": "Users",
      "id": 5,
      "nom": "Traoré",
      "prenoms": "Assane",
      "email": "assanetraore@gmail.com",
      "password": "jenesaispas",
      "contact": "+212 755 489 258",
      "posts": []
  },
  {
      "@id": "/apip/users/8",
      "@type": "Users",
      "id": 8,
      "nom": "N'guessan",
      "prenoms": "Jean-Michel",
      "email": "jeanmichel@gmail.com",
      "password": "12345678",
      "contact": "+212758245988",
      "posts": [
          {
              "@id": "/apip/posts/7",
              "@type": "Post",
              "id": 7,
              "address": "Raija, Fes",
              "prix": "2000",
              "images": "replcer apres",
              "description": "",
              "category": {
                  "@id": "/apip/categories/1",
                  "@type": "Category",
                  "id": 1,
                  "titre": "Appartement"
              }
          }
      ]
  },
  {
      "@id": "/apip/users/9",
      "@type": "Users",
      "id": 9,
      "nom": "Ahouty",
      "prenoms": "Rodrigue",
      "email": "rodrigueahouty@gmail.com",
      "password": "123456789",
      "contact": "+212586987423",
      "posts": []
  }
    ]
    // users.map((user, key)=>{
    //   if(email == user.email && password == user.password){
    //     user_get = user
    //   }

            
      // while(find == false){
        //   if(email == user.email && password == user.password){
          //     find = true
          //     user_find = user
          //   }
          //   console.log("Nbre d'occurence : " + i)
          //   i++
          
          // }
          // return user_get
    //})
    user_get = users.filter((user) =>{
       return (user.email == email && user.password == password)?user:null
    })
    console.log('user : ' + user_get) 
    return user_get
  }
  _userConnect(){
    // console.log(this.props.email)
    // password = this.password
    // console.log("Email recuperer dans la props : " + email)
    // console.log("Mot de passe recuperer dans la props" + password)
    if(this.email =="" && this.password==""){
      this.setState({ userInfo : null, message_connection : "Remplissez correctement les champs", isLoading : false })
    }else{
      // const params = {
      //   "email" : this.props.email,
      //   "password" : this.props.password 
      // }
      // console.log("Parametre conçus dans le userConnect : " + params.ge)
    //console.log(data)
      const data = this.getUser(this.email, this.password)
      console.log("Dans la methode userconnect : " + data)
      if(data == null || data == ""){
        this.setState({ userInfo : null, message_connection : "E-mail ou mot de passe incorrect", isLoading : false })
      }else{
        this.setState({userInfo : data, isConnected : true, isLoading : false}, () => this._userAuthen())
      }
    }
  }
  _userSign(){
    console.log(this.email)
    console.log(this.password)
    const params = {
      "nom" : this.nom,
      "prenoms" : this.prenoms,
      "contact" : this.contact,
      "email" : this.email,
      "password" : this.password,
      "request" : "inscription" 
    }
    getDatasFromApi("users", "post", params).then(data => (data==null)?this.setState({ isLoading : false ,userInfo : [] , message_connection : "Une erreur est survenue lors de l'inscription" }):this.setState({ userInfo : data, isConnected : true, isLoading : false }, () => this._userAuthen()))
    
  }
  
  _userAuthen(){
    console.log("userAuth pour le reducer : "+this.state.userInfo)
    const action = {
        type : "user_add",
        value :  this.state.userInfo
    }
    this.props.dispatch(action)
  }
  _getEmail(valeur){
    this.email = valeur
  }
  _getPassword(valeur){
    this.password = valeur
  }
  _getContact(valeur){
    this.contact = valeur
  }
  _getFamilyName(valeur){
    this.nom = valeur
  }
  _getName(valeur){
    this.prenoms = valeur
  }
  getInputsData = () => {
      
  }

 

  render(){
    console.log(this.props.navigation.state)
    console.log(this.state.userInfo)
      
    // if(this.state.userInfo.length == 0){
      //   this._loadUser()
      //   console.log("Contenu du state: " + this.state.userInfo)
      // }
      //console.log(this.props.user[0]["nom"])
      if(this.state.isConnected === true && this.props.user != null){
        
        //this.state.userInfo = this.state.userInfo
        
      return ( 
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize : 25, fontWeight: "bold", color:"#2d6793"}}>PROFIL</Text>
          </View>
          <View style={styles.main_container}>
            <Text style={styles.title}>Mon compte</Text>
            <View style={styles.user_infos}>
              <View style={{flex : 1}}>
                <Image source={{uri:"https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/p960x960/32484604_1635717493209943_6926054550608543744_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeFZaNhLDiOL05_GAj5xblpjfuaJ_Rq9jHl-5on9Gr2MefBFg91_bQnlbN7VtqmvkXU3FD-_W_drPcgJIKYt9wOx&_nc_oc=AQllG5TyxCbFRJfXQZfH3YrC6VQl6gA2AfNEHmRm5SmNf9yIeQQ_Rmpenk4W8-axfzc&_nc_ht=scontent-mad1-1.xx&_nc_tp=6&oh=18ff8b304bac0cb79c155b4c641b9962&oe=5F343712"}} style={styles.user_pic} />
              </View>
              <View style={{flex:1}}>
                <Text style={styles.users}>{(this.state.userInfo===undefined)?"":this.state.userInfo[0].prenoms} {(this.state.userInfo===undefined)?"":this.state.userInfo[0].nom}</Text>
                <Text style={styles.action}>{(this.state.userInfo===undefined)?"Aucune annonce postée":this.state.userInfo[0].posts.length+" annonce(s) postée(s)"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.posts}>
            <Text style={styles.title}>Mes annonces</Text>
            <FlatList data={(this.state.userInfo[0].posts.length===undefined)?[]:this.state.userInfo[0].posts}/**/
              KeyExtractor = {(item) => item.id.toString()}
              renderItem = {({item}) => <MyPost post={item} style={styles.post_card}/>}
            />
          </View>
          
        </View>
        )

    }else{
      if(this.state.action % 2 == 0){
        return ( 

          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{fontSize : 25, fontWeight: "bold", color:"#2d6793"}}>INSCRIPTION</Text>
            </View>
            <View style={styles.main_container_auth}>
              <ScrollView>
              
                <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
                  <Icon color="#eb6e5d" name="user" size={35} style={{flex:1}}/>
                  <TextInput style={styles.ville} 
                  onSubmitEditing={(text) => this._getFamilyName(text)}
                  onChangeText = {(text) => this._getFamilyName(text)}
                  placeholder = "Nom" placeholderTextColor="#2d6793"/>
                </View>
                <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
                  <Icon color="#eb6e5d" name="user" size={35} style={{flex:1}}/>
                  <TextInput style={styles.ville} 
                  onSubmitEditing={(text) => this._getName(text)}
                  onChangeText = {(text) => this._getName(text)}
                  placeholder = "Prénom(s)" placeholderTextColor="#2d6793"/>
                </View>
                <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
                  <Icon color="#eb6e5d" name="phone" size={35} style={{flex:1}}/>
                  <TextInput style={styles.ville} 
                  onSubmitEditing={(text) => this._getContact(text)}
                  onChangeText = {(text) => this._getContact(text)}
                  placeholder = "Téléphone" placeholderTextColor="#2d6793"/>
                </View>
                <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
                  <Icon color="#eb6e5d" name="mail" size={35} style={{flex:1}}/>
                  <TextInput style={styles.ville} 
                  onSubmitEditing={(text) => this._getEmail(text)}
                  onChangeText = {(text) => this._getEmail(text)}
                  placeholder = "E-mail" placeholderTextColor="#2d6793"/>
                </View>
                <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
                  <Icon color="#eb6e5d" name="lock1" size={35} style={{flex:1}}/>
                  <TextInput style={styles.ville} 
                  secureTextEntry={true} 
                  onSubmitEditing={(text) => this._getPassword(text)}
                  onChangeText = {(text) => this._getPassword(text)}
                  placeholder = "Mot de passe" placeholderTextColor="#2d6793"/>
                </View>
                <View>
                  <Bouton titre="S'inscrire"
                  call={() => this._userSign()}
                  />
                </View>
                <View>
                  <Text style={{color : "#eb6e5d"}}></Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.setState({ action : this.state.action + 1})}>
                    <Text>Toucher ici pour vous connectez</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{color : "#2d6793"}}>{this.state.message_connection}</Text>
                </View>
                {this.loader()}
              </ScrollView>
            </View>
          </View>
        ) 
      }
     return ( 
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize : 25, fontWeight: "bold", color:"#2d6793"}}>CONNEXION</Text>
          </View>
          <View style={styles.main_container_auth} onResponderMove={(e) => console.log("move: "+e)}>
            <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
              <Icon color="#eb6e5d" name="user" size={(width+height)/35} style={{flex:1}}/>
              <TextInput style={styles.ville} 
              onSubmitEditing={(text) => this._getEmail(text)}
              onChangeText = {(text) => this._getEmail(text)}
              placeholder = "E-mail" placeholderTextColor="#2d6793"/>
            </View>
            <View style={{flexDirection: "row", justifyContent:'center', alignItems:"center", marginTop:10}}>
              <Icon color="#eb6e5d" name="lock1" size={(width+height)/35} style={{flex:1}}/>
              <TextInput style={styles.ville} 
              secureTextEntry={true} 
              onSubmitEditing={(text) => this._getPassword(text)}
              onChangeText = {(text) => this._getPassword(text)}
              placeholder = "Mot de passe" placeholderTextColor="#2d6793"/>
            </View>
            <View>
              <Bouton titre="Se connecter"
               call={() => this._userConnect()}
              />
              </View>
            <View>
              <Text style={{color : "#eb6e5d"}}></Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.setState({ action : this.state.action + 1})}>
                  <Text>Toucher ici pour vous inscrire</Text>
                </TouchableOpacity>
            </View>
            <View>
              <Text style={{textAlign: "center" ,color : "#2d6793"}}>{this.state.message_connection}</Text>
            </View>
            {this.loader()}
          </View>
        </View>
      )
    }
    
  }
}
const {width, height} = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 30,
    backgroundColor : "#f7f7f7"
    //justifyContent: "center"
  },
  title:{
    //flex:1,
    color: "#2d6793",
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
  user_infos:{
    flex:7,
    justifyContent:"center",
    alignItems:"center",
  },
  user_pic:{
    //flex:1,
    marginTop:10,
    width: (width * 25)/200,
    height: ((height) * 25)/400,
    borderRadius: 50,
  },
  users:{
    color : "#eb6e5d",
    fontSize: 20
  },
  post_card:{
    flex: 10,
    justifyContent:"center",
    alignItems: "center",
  },
    address:{
      fontSize: 16,
      color: "#2d6793"
  },
  prix : {
      fontSize: 16,
      color: "#eb6e5d"
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
    flex: 4,
    backgroundColor: "#fff",
    margin: 10,
    padding:10,
    borderRadius: 30,
    //justifyContent:"center"
  },
  main_container_auth:{
    flex: 10,
    backgroundColor: "#fff",
    margin: 10,
    padding:10,
    borderRadius: 30,
    //justifyContent:"center"
  },
  posts:{
    flex: 7,
    backgroundColor: "#fff",
    margin: 10,
    padding:10,
    borderRadius: 30
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
    fontSize: 18,
    height: 50,
    borderRadius:20,
    padding: 10,
    margin:5,
    backgroundColor: "#f7f7f7",
    flex:8
  },

  auth_main_container : {
    flex : 1,
    justifyContent:"center",
    alignItems:"center"
  
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
  return {
      user : state.user
  }
}

export default connect(mapStateToProps)(Profile)

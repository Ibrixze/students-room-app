import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View, FlatList, Text, Platform, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import { connect } from 'react-redux';


/* TRANSFORMER TOUTES LES VUES D INPUT EN COMPOSANT, ANSI QUE LES HEADER ET AUTRES...*/

class ProfilSettings extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          stateNormal : 0 
        }
    }
    
    // Pour le regler le probleme du binding
    _displaySetProfil = ()=>{
        this.props.navigation.navigate("SetProfil")
     }
     
     _logOut = () =>{
        this.setState({ stateNormal : this.state.stateNormal + 1 }, () => {
          console.log("Message depuis le Log Out: Déconnexion en cours")
          const action = {
            type : "user_disconnect"
          }
          this.props.dispatch(action)
          console.log("Les nouvelles props affichées dans le logout : " + this.props.user) 
        })
        
     }
     componentDidUpdate(){
      // console.log("Message depuis le Log Out: Déconnexion en cours")
      //   const action = {
      //     type : "user_disconnect"
      //   }
      //   this.props.dispatch(action)
      console.log("ComponenetDidUpdate: " + this.props.user)
     }
    render(){
        console.log("Affichage des props dans le render : " + this.props.user)
        // if(this.props.user[0] != undefined){
          return (
          <View style={styles.container}>
              <View style={styles.main_container}>
                  <TouchableOpacity onPress = { (e) =>{ 
                    if(this.props.user[0] != undefined){
                      e.stopPropagation()
                      this._displaySetProfil()
                    }else{
                      Alert.alert("Information", "Vous devez vous d'abord vous connectez !")
                    }
                  }
                  }>    
                      <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center',padding:10}}>
                          <Icon name="dashboard" color="#eb6e5d" size={20} style={{flex:1}}/>
                          <Text style={{flex:10, fontSize:20, color:'#2d6793'}}>Modification du profil</Text>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={styles.main_container}>
                  <TouchableOpacity onPress = {(e) => {
                    if(this.props.user[0] != undefined){
                      e.stopPropagation()
                      this._logOut()
                    }else{
                      Alert.alert("Information", "Vous devez vous d'abord vous connectez !")
                    }
                  }}>
                      <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center',padding:10}}>
                      <Icon name="logout" color="#eb6e5d" size={20} style={{flex:1}}/>
                      <Text style={{flex:10, fontSize:20, color:'#2d6793'}}>Déconnexion</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
        );
    //   }else{
    //     return (
    //       <View style={styles.container}>
    //           <View style={styles.main_container}>
    //               <TouchableOpacity onPress = {this._displaySetProfil}>    
    //                   <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center',padding:10}}>
    //                       <Icon name="dashboard" color="#eb6e5d" size={20} style={{flex:1}}/>
    //                       <Text style={{flex:10, fontSize:20, color:'#2d6793'}}>Modification du profil</Text>
    //                   </View>
    //               </TouchableOpacity>
    //           </View>
    //       </View>
    //     )
    //   }
     }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 30,
    backgroundColor: "#f0f0f0"
    //justifyContent: "center"
  },
  title:{
    flex:1,
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
    width: 130,
    height: 130,
    borderRadius:65,
  },
  users:{
    color : "#eb6e5d",
    fontSize: 20
  },
  post_card:{
    flex: 10,
    justifyContent:"center",
    alignItems: "center"
  },
  header:{
    //flex: 1,
    height: 80,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    padding:10,
    borderRadius: 20,
    justifyContent: "center"
  },
  main_container:{

    backgroundColor: "#fff",
    // marginLeft: 10,
    // marginRight: 10,
    marginTop:10,
    padding:10,
    borderRadius: 20,
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
    borderRadius:30,
    padding: 10,
    backgroundColor: "#f0f0f0",
    flex:11
  }

})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ProfilSettings)
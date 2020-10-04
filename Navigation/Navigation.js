import React from "react"
import Icon from "react-native-vector-icons/AntDesign"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import AddPosts from "../Components/AddPosts"
import PostDetails from "../Components/PostDetails"
import Profile from "../Components/Profile"
import ProfilSettings from "../Components/ProfilSettings"
import SearchCard from "../Components/SearchCard"
import Settings from "../Components/Settings"
import SetProfil from "../Components/SetProfil"
import Header from "../Components/Header"

const SearchStackNavigator = createStackNavigator({
  SearchCard: {
    screen: SearchCard,
    navigationOptions: {
      title: 'Student Room',
      headerTintColor: "#2d6793",
      headerTitleStyle:{
        fontSize: 25,
        fontWeight: "bold",
        textTransform : "uppercase"
      }
    }
  },
  PostDetails: {
    screen: PostDetails,
    navigationOptions: {
      title: "Détails de l'annonce",
      headerTintColor: "#2d6793"
    }
  }
})

const SettingStackNavigator = createStackNavigator({
  Settings : {
    screen : Settings,
    navigationOptions : {
      title : "Paramètres",
      headerTintColor : "#2d6793",
      headerTitle : () => <Header />
    }
  },
  ProfilSettings : {
    screen : ProfilSettings,
    navigationOptions:{
      title : "Paramètre du compte",
      headerTintColor : "#2d6793",
      
    }
  },
  SetProfil : {
    screen : SetProfil,
    navigationOptions : {
      title : "Modification du profil",
      headerTintColor : "#2d6793",
    }
  }
})
const MoviesTabNavigator = createBottomTabNavigator(
  {
    Accueil: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return <Icon name="search1" color={tintColor} size={30}/>
        }
      }
    },
    Poster: {
      screen: AddPosts,
      navigationOptions: {
        title: "Poster",
        tabBarIcon: ({tintColor}) => {
          return  <Icon name="pluscircleo" color={tintColor} size={30}/>
        }
      }
    },
    Profil: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return <Icon name="user" color={tintColor} size={30}/>
        }
      }
    },
    Paramètre: {
      screen: SettingStackNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return <Icon name="setting" color={tintColor} size={30}/>
        }
      }
    }
  },

  {
    tabBarOptions: {
      activeTintColor: '#eb6e5d', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveTintColor: '#2d6793', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: true, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  }
)


export default createAppContainer(
  createSwitchNavigator({
    App: MoviesTabNavigator
  })
)

import React, { Component } from "react"
import { View, Text, StyleSheet} from "react-native"
import { connect } from "react-redux"

class AuthentificationUser extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            userDatas = []
        }
    }

    _userAuthen(){
        const action = {
            type : "user_add",
            value :  []/*this.state.userDatas (Donnée recupéré depuis l'api)*/
        },
        this.props.dispatch(action)
    }
    render(){
        return(
             <View>
                <Text>Connexion/Inscription de l'utilisateur</Text>
             </View>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch : (action) => {dispatch(action)}
//     }
// }
const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(AuthentificationUser)
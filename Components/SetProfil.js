import React from "react"
import { Image ,View, Text, StyleSheet, Dimensions } from "react-native"
import CustomInput from "./CustomInput"


class SetProfil extends React.Component{

    render(){
        return(
            <View style={{backgroundColor : "#f7f7f7", flex : 1}}>
                 <View style={styles.profile_pic}>
                    <View style={{width : (width*30)/100, height: (height*15)/100, borderRadius : 75, backgroundColor:"#f7f7f7"}}>
                        <Image source={{uri : "https://lorempicsum.com/user"}}/>
                    </View>
                    <View>
                        <Text>Ibrahim Traoré</Text>
                    </View>
                    <View>
                        <Text>traoreibrahim309@gmail.com</Text>
                    </View>
                 </View>
                 <View style={styles.user_info}>
                    <CustomInput
                    on_end_editing={(text) => this._getAddress(text)}
                    on_change_text={(text) => this._getAddress(text)}
                    on_focus={() => this.setState({ rechargement : this.state.rechargement + 1 }) }
                    icon={{"name" : "user"}} titre={{"content":"Nom"}}/>
                    <CustomInput
                    on_end_editing={(text) => this._getAddress(text)}
                    on_change_text={(text) => this._getAddress(text)}
                    on_focus={() => this.setState({ rechargement : this.state.rechargement + 1 }) } 
                    icon={{"name" : "user"}} titre={{"content":"Prénom(s)"}}/>
                    <CustomInput 
                    on_end_editing={(text) => this._getAddress(text)}
                    on_change_text={(text) => this._getAddress(text)}
                    on_focus={() => this.setState({ rechargement : this.state.rechargement + 1 }) }
                    icon={{"name" : "email"}} titre={{"content":"Email"}}/>
                    <CustomInput 
                    on_end_editing={(text) => this._getAddress(text)}
                    on_change_text={(text) => this._getAddress(text)}
                    on_focus={() => this.setState({ rechargement : this.state.rechargement + 1 }) }
                    icon={{"name" : "phone"}} titre={{"content":"Contact"}}/>
                    <CustomInput 
                    on_end_editing={(text) => this._getAddress(text)}
                    on_change_text={(text) => this._getAddress(text)}
                    on_focus={() => this.setState({ rechargement : this.state.rechargement + 1 }) }
                    icon={{"name" : "lock1"}} titre={{"content":"Mot de passe"}}/>                     
                 </View>
            </View>
        )
    }
}
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    profile_pic : {
        padding : 20,
        flex: 2,
        alignItems : "center",
        backgroundColor : "#fff",
        marginBottom: 10
    },
    user_info : {
        padding : 20,
        flex : 5,
        backgroundColor : "#fff",
    }
})

export default SetProfil
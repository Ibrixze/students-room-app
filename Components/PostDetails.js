import React from "react"
import { Dimensions, StyleSheet, View, Text, ScrollView, Image} from "react-native"


class PostDetails extends React.Component{

  render(){
    const post = this.props.navigation.state
    return(
      <View style={styles.main_container}>
        <Image style={styles.pictures} source={{uri : post.params.id_post.images}}/>
        <ScrollView style={styles.container_info}>
          <View style={styles.post_info}>
            <View style={styles.post_price_complete_address}>
                <Text style={styles.title}>Informations sur l'annonce</Text>
                <Text style={{color: "#eb6e5d", fontSize: 18}}>Prix :  {post.params.id_post.prix} dhs</Text>
                <Text style={{color: "#2d6793", fontSize: 18 }}>Quartier, Ville : {post.params.id_post.address}</Text>
            </View>
            <View style={styles.post_username_and_contact}>
              <Text style={styles.title}>Informations de l'annonceur</Text>
              <View style={{flex: 1, flexDirection:'row'}}>
                <View style={{alignItems:"center", justifyContent:"center", flex: 1, borderRadius:100, backgroundColor:"#f0f0f0"}}>

                  <Image
                     source={{uri:"https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/p960x960/32484604_1635717493209943_6926054550608543744_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeFZaNhLDiOL05_GAj5xblpjfuaJ_Rq9jHl-5on9Gr2MefBFg91_bQnlbN7VtqmvkXU3FD-_W_drPcgJIKYt9wOx&_nc_oc=AQllG5TyxCbFRJfXQZfH3YrC6VQl6gA2AfNEHmRm5SmNf9yIeQQ_Rmpenk4W8-axfzc&_nc_ht=scontent-mad1-1.xx&_nc_tp=6&oh=18ff8b304bac0cb79c155b4c641b9962&oe=5F343712"}}
                     style={styles.profile_pic}
                    />
                </View>
                <View style={{flex: 7}}>
                  <Text style={styles.username}>{post.params.id_post.user.prenoms} {post.params.id_post.user.nom}</Text>
                  <Text style={styles.post_user_contact}>{post.params.id_post.user.contact}</Text>
                </View>
              </View>
            </View>
            <View style={styles.post_description}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.content}>{post.params.id_post.description}</Text>
            </View>
          </View>
          <View style={styles.container_map}>
            <Text style={styles.title}>Géolacalisation</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  main_container : {
    flex: 1,

    margin: 0
  },
  pictures:{
    flex: 1,
    marginTop: 10,
    //width : width-10,
  },
  container_info:{
    //backgroundColor: "red",
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    flex:1,
    marginTop: 10,
    //width : width ,
    borderTopWidth : 1,
    borderRadius: 20,
    borderTopColor : "#fff"
  },
  container_map:{
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    //flex:1,
    height: 200,
    marginBottom: 10,
    //width : width - 10
  },
  title :{
    fontSize : 18,
    color: "#2d6793",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 5,
    paddingBottom: 5,
  },
  post_username_and_contact:{
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,
    //width : width - 10,
  },
  post_price_complete_address:{
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,

    //width : width - 10
  },
  post_description:{
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,
  },
  post_info:{
    flex: 1
  },
  username:{
    color : "#eb6e5d",
    fontSize: 18,
    marginLeft: 20
  },
  post_user_contact:{
    fontStyle: "normal",
    fontSize: 14,
    marginLeft: 20
  },
  profile_pic:{
    width: 50,
    height: 50,
    borderRadius:50
  }
})

export default PostDetails

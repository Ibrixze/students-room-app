import React from 'react';
import { Text ,ActivityIndicator, StyleSheet, View, FlatList, Platform, StatusBar } from 'react-native';
import Card from "../Components/Card"
import posts from "../Helpers/PostsData"
// import { Categories } from "../Helpers/CategoriesData"
import {getDatasFromApi} from "../API/StudentRoomApi"
import PostCategory from './PostCategory';
//Categories
class SearchCard extends React.Component{
  constructor(props){
    super(props)
    this.postEndLoading = false
    this.rendering = true
    this.categoryEndLoading = false
    this.compteur = -1
    this.state = {
      datas : [] ,
      categories : [{
        "id": 1,
        "titre": "Appartement",
        "posts": [
            "/apip/posts/2",
            "/apip/posts/6",
            "/apip/posts/7",
            "/apip/posts/8",
            "/apip/posts/9",
            "/apip/posts/10",
            "/apip/posts/11"
        ]
    },
    {
        "id": 2,
        "titre": "Chambre",
        "posts": [
            "/apip/posts/1",
            "/apip/posts/3",
            "/apip/posts/4"
        ]
    }],
      render : true,
      
      //isLoading : true
    }
  }

  // loader(){
  //   if(this.state.isLoading){
  //     return(
  //       <View style={styles.loading_container}>
  //         <ActivityIndicator size="large"/>
  //       </View>
  //     )
  //     // return(
  //     //     <View style={styles.loading_container}>
  //     //        <Text>Chargerment...</Text>
  //     //     </View>
  //     //    )

  //   }
  // }

  _loadPosts(){
    this.setState({ isLoading : true})
    getDatasFromApi("posts", "get", null).then(data => this.setState({ datas : data, isLoading : false }))
  }
  loadPost(){
    
    if(this.state.datas.length == 0){
      this.setState({ isLoading : true})
      getDatasFromApi("posts", "get", null).then(data => this.setState({ datas : data }), () => this.postEndLoading = true)
    }
    if(this.state.categories.length == 0){
      getDatasFromApi("categories", "get", null).then(data => this.setState({ categories : data}), () => this.categoryEndLoading = true)  
    }
    
      //this.state.render = false
  }
  
  // _loadCategories(){
  //   getDatasFromApi("categories", "get", null).then(data => this.setState({ datas : data }))
  // }
  _displayPostDetails = (id) => { // Passé user en parametre car les données sont statiques. Une fois l'Api généré ya que le id qui doit passer pour éffectuer la requete
      console.log("Identifiant du post cliqué : " + parseInt(id))
      this.props.navigation.navigate("PostDetails", {id_post : id})
  }
  componentDidUpdate(){
    // this.state.categories = Categories
    // this.state.datas = PostDatas
    //this.setState({isLoading : false})
    //this.loadPost()
    //this.setState({ isLoading : true})
    // if(this.state.categories == null ){
    //   this.setState({ categories : Categories/*, isLoading : false*/})/*, () => this.categoryEndLoading = true*/  
    //   console.log("dans la requete categories")
    // }
  }
  _keyView(item){
    item.id.toString()
  }
   
  render(){
    // console.log(Categories)
    // this.state.categories = Categories
    // this.state.datas = PostDatas
    // if(this.state.categories.length == 0){
    //   getDatasFromApi("categories", "get", null).then(data => this.setState({ datas : data, isLoading : false }))
    // }
    //console.log(this.props)
    //if(this.state.datas.length == 0){
      //this.setState({ isLoading : true})
      //getDatasFromApi("posts", "get", null).then(data => this.setState({ datas : data }), () => this.postEndLoading = true)
    //}
    //  if(this.state.categories == null && this.state.render == true){
    //    this.setState({ isLoading : true, render : false})
    //    console.log("dans l'activation du loading")
    //  }
    // if(this.state.categories.length > 0 && this.state.isLoading == true && this.state.render == false){
    //    this.setState({ datas : PostDatas, render : null, isLoading: false })/*, () => this.rendering = false*/
    //   console.log("dans la requete posts")
    // }
    //if(this.state.categories.length == 0 && this.state.datas.length > 0){
      //getDatasFromApi("categories", "get", null).then(data => this.setState({ categories : data, isLoading : false})/*, () => this.categoryEndLoading = true*/)  
     
    //}
   // if(this.postEndLoading==true && this.categoryEndLoading==true)
     //   this.setState({isLoading : false})
      
      
      //console.log(this.state.datas.map(element => element.id.toString()))
      console.log(this.state.datas[0])
      this.compteur ++
      return (
        <View style={styles.container}>
          <View style={styles.tags}>  
            {this.state.categories.map((element, key) => <PostCategory key={key.toString()} category={element}/>)}
          </View>
          <View style={styles.posts}>
            <FlatList  
            data={posts} 
            KeyExtractor = {(item) => item.id.toString()} 
            renderItem = {({item}) => <Card post={item} displayPostDetails = {this._displayPostDetails}/>} 
            />
          </View>  
        </View>       
      )
   
  }
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f7f7f7',
    //alignItems: "center",
    justifyContent: 'center',
    paddingTop : Platform.OS=="android"?StatusBar.currentHeight:0,
  },
  tags:{
    flexDirection:"row",
    //flex: 1,
    //margin:0
    borderRadius : 20 
  },
  posts:{
    flex : 11,
    borderTopRightRadius : 20,
    borderTopLeftRadius : 20,
    
    backgroundColor : "#f7f7f7"
  },
  active:{
   color:"#eb6e5d" 
  },
  loading_container : {    
    //flex:1,
    position : "absolute",
    //backgroundColor: "#fff",
    left: 0,
    right: 0,
    top: 80,
    bottom: 0,
    alignItems : "center",
    justifyContent : "center",
    zIndex : 1000
  }
});

export default SearchCard

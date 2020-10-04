import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
//import SearchCard from "./Components/searchCard"
import Navigation from "./Navigation/Navigation"
import { Provider } from 'react-redux'
import Store from "./Store/configureStore"
export default class App extends React.Component{

  render(){
    return (

      <Provider store={Store}>
        <Navigation />
      </Provider>

      /*<View style={styles.container}>
        <FlatList data={this.state.datas}
            KeyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) => <SearchCard post={item}/>}

        />
        <StatusBar style="auto" />
      </View>*/
    );
  }
}

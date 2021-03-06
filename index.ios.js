/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

//
// class AwesomeProject extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataSource:new ListView.DataSource({
//                 rowHasChanged:(row1, row2) => row1 !== row2
//             }),
//             loaded:false
//         }
//     }
//
//     componentDidMount() {
//         this.fetchData();
//     }
//
//     fetchData() {
//         var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
//         fetch(REQUEST_URL)
//             .then((response) => response.json())
//             .then((responseData) => {
//                 this.setState({
//                     dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
//                     loaded:true
//                 })
//             })
//             .done();
//     }
//
//     renderLoadingView() {
//         return (
//             <View style={styles.container}>
//                 <Text>
//                     Loading movies ...
//                 </Text>
//             </View>
//         );
//     }
//
//     //渲染movie
//     renderMovie(movie) {
//         return (
//             <View style={styles.container}>
//                 <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
//                 <View style={styles.rightContainer}>
//                     <Text style={styles.title}>{movie.title}</Text>
//                     <Text style={styles.year}>{movie.year}</Text>
//                 </View>
//             </View>
//         );
//     }
//
//     renderListView(){
//         return (
//             <ListView
//                 dataSource = {this.state.dataSource}
//                 renderRow = {this.renderMovie}
//                 style = {styles.listView}
//                 ></ListView>
//         );
//     }
//
//     render() {
//         if (!this.state.loaded) {
//             return this.renderLoadingView();
//         }
//
//         return this.renderListView();
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF'
//     },
//     rightContainer: {
//         flex: 1
//     },
//     title: {
//         fontSize: 20,
//         marginBottom: 8,
//         textAlign: "center"
//     },
//     year: {
//         textAlign: "center"
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5
//     },
//     thumbnail: {
//         width: 53,
//         height: 81
//     },
//     listView:{
//         paddingTop:20,
//         backgroundColor:'#F5FCFF'
//     }
// });

import Root from './app/root';


AppRegistry.registerComponent('HuaBan', () => Root);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text
 } from 'react-native';
 import {
   Navigator
 } from 'react-native-deprecated-custom-components';

 import Main from './app/components/main';
 import Dashboard from './app/components/dashboard';

 class test_project extends React.Component {
   render() {
     return (
       <Navigator
       style={{ flex:1 }}
       initialRoute={{ name: 'Main' }}
       renderScene={ this.renderScene } />
     );
   }

   renderScene(route, navigator) {
    if(route.name == 'Main') {
      return <Main navigator={navigator} />
    }
    if(route.name == 'Dashboard') {
      return <Dashboard navigator={navigator} {...route.passProps} />
    }
  };
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });

 AppRegistry.registerComponent('test_project', () => test_project);

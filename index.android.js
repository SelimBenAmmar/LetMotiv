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

var Main = require('./app/components/main');
var Directeur = require('./app/components/directeur/directeur_accueil');
var Eleve = require('./app/components/eleve/eleve_accueil');

class test_project extends React.Component {
  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      initialRoute={{ name: 'Main' }}
      renderScene={ this.renderScene } />
    );
  }

  // The routes
  renderScene(route, navigator) {
   if(route.name == 'Main') {
     return <Main navigator={navigator} />
   }
   if(route.name == 'Eleve') {
     return <Eleve navigator={navigator} />
   }
   if(route.name == 'Directeur') {
     return <Directeur navigator={navigator} />
   }
 };
}

AppRegistry.registerComponent('test_project', () => test_project);

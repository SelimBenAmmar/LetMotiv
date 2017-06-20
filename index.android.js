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
var Directeur_Accueil_0 = require('./app/components/directeur/directeur_accueil0');
var Eleve = require('./app/components/eleve/eleve_accueil');
var Register = require('./app/components/register_login/register');
var Login = require('./app/components/register_login/login');
var Directeur_Catalogue = require('./app/components/directeur/directeur_catalogue');

class test_project extends React.Component {
  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      initialRoute={{ name: 'Main' }}
      renderScene={ this.renderScene } />
    );
  }

  /* ---------------------- Les routes des 2 interfaces --------------------- */
  renderScene(route, navigator) {
   if(route.name == 'Main') {
     return <Main navigator={navigator} />
   }
   if(route.name == 'Register') {
     return <Register navigator={navigator} />
   }
   if(route.name == 'Login') {
     return <Login navigator={navigator} />
   }

   /* ----------------- Les routes de l'interface du directeur ------------------ */
   if(route.name == 'Directeur_Accueil_0') {
     return <Directeur_Accueil_0 navigator={navigator} />
   }
   if(route.name == 'Directeur_Catalogue') {
     return <Directeur_Catalogue navigator={navigator} />
   }

    /* ----------------- Les routes de l'interface de l'élève ------------------ */
   if(route.name == 'Eleve') {
     return <Eleve navigator={navigator} />
   }
 };
}

AppRegistry.registerComponent('test_project', () => test_project);

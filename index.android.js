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

// ------------------- import Login and register pages ---------------------------------
var Register = require('./app/components/register_login/register');
var Login = require('./app/components/register_login/login');

// ------------------- import Directeur related pages  ---------------------------------
var Directeur_Accueil_0 = require('./app/components/directeur/directeur_accueil0');
var Directeur_Catalogue = require('./app/components/directeur/directeur_catalogue');

// ------------------- import Eleve related pages  -------------------------------------
var Eleve = require('./app/components/eleve/eleve_accueil');

// ------------------- import Activites related pages  -------------------------------------
var ClassCroute = require('./app/components/activites/class_croute');
var ClubSuperHeros = require('./app/components/activites/club_super_heros');
var OrientExpress = require('./app/components/activites/orient_express');
var TribunalBacs = require('./app/components/activites/tribunal_bacs');

class test_project extends React.Component {
  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      initialRoute={{ name: 'Login' }}
      renderScene={ this.renderScene } />
    );
  }

  /* ---------------------- Les routes des 2 interfaces --------------------- */
  renderScene(route, navigator) {
   if(route.name == 'Register') {
     return <Register navigator={navigator} />
   }
   if(route.name == 'Login') {
     return <Login navigator={navigator} />
   }

   /* ----------------- Les routes de l'interface du directeur ------------------ */
   if(route.name == 'Directeur_Accueil_0') {
     return <Directeur_Accueil_0 navigator={navigator} {...route.passProps}/>
   }
   if(route.name == 'Directeur_Catalogue') {
     return <Directeur_Catalogue navigator={navigator} />
   }

    /* ----------------- Les routes de l'interface de l'élève ------------------ */
   if(route.name == 'Eleve') {
     return <Eleve navigator={navigator} />
   }

   /* ----------------- Les routes liées aux activités ------------------ */
  if(route.name == 'ClassCroute') {
    return <ClassCroute navigator={navigator} />
  }
  if(route.name == 'ClubSuperHeros') {
    return <ClubSuperHeros navigator={navigator} />
  }
  if(route.name == 'OrientExpress') {
    return <OrientExpress navigator={navigator} />
  }
  if(route.name == 'TribunalBacs') {
    return <TribunalBacs navigator={navigator} />
  }


 };
}

AppRegistry.registerComponent('test_project', () => test_project);

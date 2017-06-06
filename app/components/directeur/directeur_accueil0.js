import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

var Bottom_navigation = require('../../util/bottom_navigation');

class Directeur_Accueil_0 extends React.Component {
  goToCalendar(){
      this.props.navigator.push({
        name : 'Calendrier'
      });
  }

  render(){
    return (
      /* --------------------   a FAIRE ----------------------------
      1- Ajouter le le logo de la fléche qui pointe vers le bas
      2- Mettre l'image du bloc note vide (date et durée)
      3- Ad the footer navigation bar with : react-native-material-bottom-navigation
      ------------------------------------------------------------- */
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>
      <Text> N``hésitez plus ! </Text>
      <Text> Créez la vie de votre lycée ! </Text>

      <Image
      source={require('../../img/calendrier.png')}
      style={styles.calendar}
      onPress={this.goToCalendar.bind(this)}/>

      <Bottom_navigation/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  logo: {
    height: 50,
    width: 50
  },
  calendar: {
    height: 300,
    width: 300
  }
});



module.exports = Directeur_Accueil_0;

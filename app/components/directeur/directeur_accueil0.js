import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

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
      //source={{uri:}}
      style={styles.logo}/>
      <Text> N''hésitez plus ! </Text>
      <Text> Créez la vie de votre lycée ! </Text>

      <Image
      //source={{uri:}}
      style={styles.calendar}
      onPress={this.goToCalendar.bind(this)}/>
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
    height: 350,
  }
  calendar: {
    height: 350,
  }
});

module.exports = Directeur_Accueil_0;

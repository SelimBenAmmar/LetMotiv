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
        name : 'Calendrier_Choix_Directeur'
      });
  }

  render(){
    return (
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>
      <Text style={styles.emphasis}> N'hésitez plus ! </Text>
      <Text style={styles.body}> Créez de la vie dans votre lycée ! </Text>
      <TouchableHighlight
      onPress={this.goToCalendar.bind(this)}
      underlayColor="white">
        <Image
        source={require('../../img/calendrier.png')}
        style={styles.calendar}/>
      </TouchableHighlight>

      <Bottom_navigation/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: '#312783',
    padding: 30
  },
  logo: {
    height: 100,
    width: 100
  },
  calendar: {
    height: 300,
    width: 300
  },
  body: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'futura'
  },
  emphasis: {
    fontWeight: 'bold',
    color: '#f39200',
    fontSize: 20,
    padding:10
  }
});



module.exports = Directeur_Accueil_0;

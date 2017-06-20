import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

var Bottom_navigation = require('../../util/bottom_navigation');

class Directeur_Catalogue extends React.Component {
  state = {
  };

  render(){
    return (
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>

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
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
});
module.exports = Directeur_Catalogue;

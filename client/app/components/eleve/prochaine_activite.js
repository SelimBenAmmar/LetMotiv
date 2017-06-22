import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  TouchableHighlight,
  activeButton,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

var Bottom_navigation = require('../../util/bottom_navigation_eleve');
var Orient_express = require('../activites/orient_express');


class Prochaine_Activite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };


//TODO
  goToMission(){

    }




// TODO : mette compte à rebourd + prochaine activité
  render(){
    return (
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>
      <ScrollView><Orient_express/></ScrollView>
      <TouchableHighlight style={ activeButton==1 ? styles.durationButtonPress : styles.durationButton } onPress={this.goToMission.bind(this)} underlayColor='#DA8300'>
        <Text style={styles.durationText}> Découvre ta mission ! </Text>
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
    width: 100,
    marginBottom: 20
  },
  calendar: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  backgroundCalendar: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain'
  },
  body: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'avenir'
  },
  emphasis: {
    fontWeight: 'bold',
    color: '#f39200',
    fontSize: 20,
  },
  dateButton: {
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventButton: {

    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#C7C7CC',
    fontSize: 30,
    backgroundColor: 'white',
  }
});
module.exports = Prochaine_Activite;

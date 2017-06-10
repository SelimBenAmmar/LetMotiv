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

class Directeur_Accueil_0 extends React.Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render(){
    return (
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>
      <Text style={styles.emphasis}> N''hésitez plus ! </Text>
      <Text style={styles.body}> Créez de la vie dans votre lycée ! </Text>
        <Image
        source={require('../../img/calendrier.png')}
        style={styles.calendar}/>
      <TouchableOpacity onPress={this._showDateTimePicker}>
        <View style={styles.button}>
          <Text> C''est parti ! </Text>
        </View>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={this.state.isDateTimePickerVisible}
        onConfirm={this._handleDatePicked}
        onCancel={this._hideDateTimePicker}
        mode={'datetime'}
      />
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
    height: 220,
    width: 220,
    marginTop: 20
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
module.exports = Directeur_Accueil_0;

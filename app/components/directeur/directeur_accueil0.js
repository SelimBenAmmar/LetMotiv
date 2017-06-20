import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

var Directeur_Catalogue = require('./directeur_catalogue');
var Bottom_navigation = require('../../util/bottom_navigation');

class Directeur_Accueil_0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isDateTimePickerVisible: false,
    date_acti: 0,
    month_acti: 0,
    year_acti: 0
    }
  };

  // Les fonctionnalités liées au calendrier
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = date => {
    this.setState({ date_acti: date.getDate() });
    this.setState({ month_acti: date.getMonth() + 1 });
    this.setState({ year_acti: date.getFullYear() });

  };

  goToCatalogue(){
    this.props.navigator.push({
      name : 'Directeur_Catalogue'
    });
  }

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
          <Text> Date </Text>
        </View>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={this.state.isDateTimePickerVisible}
        onConfirm={this._handleDatePicked}
        onCancel={this._hideDateTimePicker}
        mode={'date'}
      />

      <TouchableOpacity onPress={this.goToCatalogue.bind(this)}>
        <View style={styles.button}>
          <Text> Activité </Text>
        </View>
      </TouchableOpacity>
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

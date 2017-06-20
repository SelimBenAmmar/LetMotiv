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
    this.setState({ date_acti: date.getMonth() + 1 });
    this.setState({ date_acti: date.getFullYear() });
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
      <View style={styles.calendar}>
        <Image
        source={require('../../img/calendrier.png')}
        style={styles.backgroundCalendar}>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={styles.dateButton}>
              <Text style={styles.buttonText}> Date </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showDateTimePicker} style={styles.eventButton}>
            <View style={styles.eventButton}>
              <Text style={styles.buttonText}> Event </Text>
            </View>
          </TouchableOpacity>
          <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'date'}
          />
        </Image>
      </View>
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
module.exports = Directeur_Accueil_0;

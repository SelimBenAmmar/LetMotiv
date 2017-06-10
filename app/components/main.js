import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from 'react-native';

var DeviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312783'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
    color: 'white'
  },
  button: {
    height: 45,
    width: DeviceWidth/2,
    flexDirection: 'row',
    backgroundColor: '#f39200',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
});

class Main extends React.Component {

  handleSubmitD(){
    this.props.navigator.push({
      name : 'Register'
    });
  }
  handleSubmitE(){
    this.props.navigator.push({
      name : 'Login'
    });
  }
  handleSubmitF(){
    this.props.navigator.push({
      name : 'Directeur_Accueil_0'
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmitD.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> REGISTER </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmitE.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmitF.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> DIRECTEUR </Text>
        </TouchableHighlight>
      </View>
    )
  };
}

module.exports = Main;

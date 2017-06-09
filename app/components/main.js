import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
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
            <Text style={styles.buttonText}> Register </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmitE.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> Login </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmitF.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> directeur </Text>
        </TouchableHighlight>
      </View>
    )
  };
}

module.exports = Main;

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

var api = require('../util/api');
var Dashboard = require('./dashboard');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
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
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isloading: false,
      error: false,
    }
  }

  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit(){
    this.setState({
      isloading: true
    });
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            isloading: false,
            error: 'User not found',
            username: ''
          });}
          // If the fetch worked well, we add a new route
        else {
          this.props.navigator.push({
            name : 'Dashboard',
            passProps: {userInfo: res}
          });
          this.setState({
            isloading: false,
            error: false,
            username: ''
          });
        }
      })
    }

  render(){
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Search for a Github user </Text>

        <TextInput
        style={styles.searchInput}
        value={this.props.username}
        onChange={this.handleChange.bind(this)}/>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
        <ActivityIndicator
        animating={this.state.isloading}
        color='#111'
        size='large'>
        </ActivityIndicator>
        {showErr}
      </View>
    )
  };
}

module.exports = Main;

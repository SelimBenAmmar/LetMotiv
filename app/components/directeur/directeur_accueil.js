import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

class Dashboard extends React.Component {
  makeBackground(btn){
  }
  goToProfile(){
    console.log("Profile");
  }
  goToRepos(){
    console.log("Repos");
  }
  goToNotes(){
    console.log("Notes");
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;

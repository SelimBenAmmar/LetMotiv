import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

var Bottom_navigation = require('../../util/bottom_navigation');
var Class_croute = require('../activites/class_croute');
var Club_super_heros = require('../activites/club_super_heros');
var Orient_express = require('../activites/orient_express');
var Tribunal_bacs = require('../activites/tribunal_bacs');





class Directeur_Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    selection:0
    }
  };

set1(){
  this.setState({ selection: 1 });
  }

set2(){
    this.setState({ selection: 2 });
    }

set3(){
    this.setState({ selection: 3 });
    }

set4(){
    this.setState({ selection: 4 });
    }

  render(){
    return (
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>
      <ScrollView horizontal>
        <TouchableHighlight style={styles.formButton} onPress={this.set1.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.formButtonText}> 1H </Text>
        </TouchableHighlight><TouchableHighlight style={styles.formButton} onPress={this.set2.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.formButtonText}> 2H </Text>
        </TouchableHighlight><TouchableHighlight style={styles.formButton} onPress={this.set3.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.formButtonText}> 4H </Text>
        </TouchableHighlight><TouchableHighlight style={styles.formButton} onPress={this.set4.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.formButtonText}> Journée </Text>
        </TouchableHighlight>
      </ScrollView>

      <ScrollView>
      {renderIf(this.state.selection == 1,
        <View>
        <Class_croute/>
        <Club_super_heros/>
        </View>
                      )}


      {renderIf(this.state.selection == 2,
        <View>
        <Orient_express/>
        <Tribunal_bacs/>
        </View>
                       )}
      </ScrollView>

      <Bottom_navigation/>
      </View>
    )
  }
}


/*  if (this.state.selection == 1) {
    <ScrollView>
    <Class_croute/>
    </ScrollView>

  }*/




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

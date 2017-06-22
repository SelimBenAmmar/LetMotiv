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

var activeButton = 1;



class Directeur_Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    selection:0,
    day_acti: this.props.day_acti,
    date_acti: this.props.date_acti,
    month_acti: this.props.month_acti,
    year_acti: this.props.year_acti
    }
  };

set1(){
  this.setState({ selection: 1 });
  activeButton = 1;
  }

set2(){
    this.setState({ selection: 2 });
    activeButton = 2;
    }

set3(){
    this.setState({ selection: 3 });
    activeButton = 3;
    }

set4(){
    this.setState({ selection: 4 });
    activeButton = 4;
    }

  goToDirecteur(a){
      this.props.navigator.push({
        name : 'Directeur_Accueil_0',
          passProps: {
          activite: a,
          day_acti: this.state.day_acti,
          date_acti: this.state.date_acti,
          month_acti: this.state.month_acti,
          year_acti: this.state.year_acti
        }
      });
  }

  render(){
    return (
      <View style={styles.container}>
      <Image
      source={require('../../img/logo_bas.png')}
      style={styles.logo}/>
      <View style={styles.durationContainer}>
        <TouchableHighlight style={ activeButton==1 ? styles.durationButtonPress : styles.durationButton } onPress={this.set1.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.durationText}> 1H </Text>
        </TouchableHighlight>
        <TouchableHighlight style={ activeButton==2 ? styles.durationButtonPress : styles.durationButton } onPress={this.set2.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.durationText}> 2H </Text>
        </TouchableHighlight>
        <TouchableHighlight style={ activeButton==3 ? styles.durationButtonPress : styles.durationButton } onPress={this.set3.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.durationText}> 4H </Text>
        </TouchableHighlight>
        <TouchableHighlight style={ activeButton==4 ? styles.durationButtonPress : styles.durationButton } onPress={this.set4.bind(this)} underlayColor='#DA8300'>
          <Text style={styles.durationText}> 1J </Text>
        </TouchableHighlight>
      </View>

      
      {renderIf(this.state.selection == 1,
        <ScrollView style={activeButton==1 ? styles.scrollView : styles.hidden} showsVerticalScrollIndicator={false}>
        <TouchableHighlight style={styles.formButton} onPress={this.goToDirecteur.bind(this,"Class Croute")} underlayColor='#DA8300'>
        <View><Class_croute/></View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.formButton} onPress={this.goToDirecteur.bind(this,"Club Super Heros")} underlayColor='#DA8300'>
        <View><Club_super_heros/></View>
        </TouchableHighlight>
        </ScrollView>
                      )}


      {renderIf(this.state.selection == 2,
        <ScrollView style={activeButton==2 ? styles.scrollView : styles.hidden} showsVerticalScrollIndicator={false}>
        <TouchableHighlight style={styles.formButton} onPress={this.goToDirecteur.bind(this,"Orient Express")} underlayColor='#DA8300'>
        <View><Orient_express/></View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.formButton} onPress={this.goToDirecteur.bind(this,"Tribunal Bacs")} underlayColor='#DA8300'>
        <View><Tribunal_bacs/></View>
        </TouchableHighlight>
        </ScrollView>
                       )}

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
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: '#312783',
    paddingTop:70,
  },
  logo: {
    height: 100,
    width: 100
  },

  durationContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  durationButton: {
    height:45,
    width: 70,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius:8,
    paddingTop:6,
    justifyContent: 'flex-start'
  },
  durationButtonPress: {
    height:45,
    width: 70,
    backgroundColor: '#a5abc7',
    marginHorizontal: 10,
    borderRadius:8,
    paddingTop:6,
    justifyContent: 'flex-start'
  },
  durationText: {
    alignSelf: 'center',
    color: '#312783',
    fontFamily:'avenir',
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
  },

  scrollView: {
    paddingTop:20,
    marginTop:-10,
    backgroundColor: 'white',
    borderRadius:8,
    borderColor: '#a5abc7',
    borderWidth:5,
  },
  hidden: {

  }
});
module.exports = Directeur_Catalogue;

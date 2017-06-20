import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';


import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';


class Login extends React.Component {

  handleFormChange(formData){
    if (formData) { // if validation fails, value will be null
      console.log(formData); // value here is an instance of Person
    }
  }

  goToRegister(){
    this.props.navigator.push({
      name : 'Register'
    });
  }

  goToDirecteur(){
    this.props.navigator.push({
      name : 'Directeur_Accueil_0'
    });
    console.log()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../img/logo_haut.png')}
          style={styles.logo}/>

        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>BIENVENUE !</Text>
          </View>
          <Form
            ref="form"
            style={styles.form}
            onChange={this.handleFormChange.bind(this)}>
            <InputField
              iconLeft={<Ionicon style={styles.icon} size={24} color="#C7C7CC" name="ios-person"/>}
              style={styles.formField}
              ref='id'
              placeholder='Pseudo'/>
            <InputField
              iconLeft={<Ionicon style={styles.icon} size={24} color="#C7C7CC" name="md-lock"/>}
              style={styles.formField}
              ref='password'
              placeholder='Mot de Passe'/>
          </Form>
          <TouchableHighlight style={styles.formButton} onPress={this.goToDirecteur.bind(this)} underlayColor='#DA8300'>
            <Text style={styles.formButtonText}>CONNEXION</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={this.goToRegister.bind(this)}
          underlayColor="white">
            <Text style={{color: 'white'}}> CREER UN COMPTE </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#312783',
  },
  logo: {
    height: 100,
    width: 100,
    margin:20,
  },



  formContainer: {
    width:300,
    alignSelf: 'center',
    marginHorizontal: 60,
    backgroundColor: 'white',
  },
  form: {
    paddingHorizontal:20,
  },
  formField: {
    fontSize: 12,
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize:20,
  },




  titleContainer: {
    backgroundColor: '#f39200',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 60
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },
  formButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  formButton: {
    zIndex: 1000000,
    width: 340,
    height: 50,
    backgroundColor: '#f39200',
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  footerText: {
    color: '#C7C7CC',
    fontSize: 14,
    alignSelf: 'center',
    margin: 15,
  },


  button: {
    height: 45,
    width: 150,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f39200',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
  }

});

module.exports = Login;

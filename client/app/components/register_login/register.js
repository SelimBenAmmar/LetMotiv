import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  DatePickerIOS
} from 'react-native';

import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';


class Register extends React.Component {

  goToLogin(){
    this.props.navigator.push({
      name : 'Login'
    });
  }

  /* Asynchronous storage is the database that will contain the tokens and the data.
  The asynchronous storage is shared between all the apps of the smartphone. */
  async _onValueChange(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }


    onPress(formData){
    if (formData) { // if validation fails, formData will be null
        console.log(formData);
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.first_name,
                last_name: formData.last_name,
                password: formData.password,
                mail: formData.mail,
                code_etablissement: formData.code_etablissement
            })
        })
        .then((response) => console.log(response.json()))
        .then((responseData) => {
            this._onValueChange(STORAGE_KEY, responseData.id_token);
            console.log("Signup Success!");
        })
        .done();
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
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
            style={styles.form}>

            <InputField
              style={styles.formField}
              ref='first_name'
              placeholder='Prénom'/>

            <InputField
              style={styles.formField}
              ref='last_name'
              placeholder='Nom'/>

            <InputField
              style={styles.formField}
              ref='password'
              placeholder='Mot de Passe'/>

            <InputField
              style={styles.formField}
              ref='mail'
              placeholder='Adresse email'/>

            <InputField
              style={styles.formField}
              ref='code_etablissement'
              placeholder='Code établissement'/>
          </Form>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            underlayColor='#DA8300'>
            <Text style={styles.buttonText}>INSCRIPTION</Text>
          </TouchableHighlight>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Vous avez déjà un compte ? <Text style={{fontWeight:'bold'}} onPress={this.goToLogin.bind(this)}>Cliquez ici</Text></Text>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    paddingTop:80,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#312783',
  },
  scrollContainer: {
    flex:1,
    backgroundColor: '#312783',
  },
  logo: {
    height: 100,
    width: 100,
    margin:20,
  },

  /*The title of the form*//*The form and its items*/
  formContainer: {
    marginHorizontal: 60,
  },
  form: {
    width:300,
    alignSelf: 'center',
    paddingHorizontal:20,
    backgroundColor: 'white',
  },
  formField: {
    fontSize: 12,
    fontFamily: 'avenir',
    marginTop:5,
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize:20,
  },



/*The title of the form*/
  titleContainer: {
    backgroundColor: '#f39200',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: 300,
  },
  title: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'avenir',
    letterSpacing: 2,
  },

  /*The button of the form*/
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'avenir',
    letterSpacing: 2,
  },
  button: {
    width: 340,
    height: 50,
    backgroundColor: '#f39200',
    alignSelf: 'center',
    justifyContent: 'center'
  },

  /*Footer*/
  footer: {
    backgroundColor: 'white',
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#C7C7CC',
    fontSize: 12,
    alignSelf: 'center',
    marginVertical: 10,
    fontFamily: 'avenir',
  },
});

module.exports = Register;

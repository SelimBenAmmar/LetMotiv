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


class Register extends React.Component {

  handleFormChange(formData){
    if (formData) { // if validation fails, value will be null
      console.log(formData); // value here is an instance of Person
    }
  }

  goToLogin(){
    this.props.navigator.push({
      name : 'Login'
    });
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
              iconLeft={<IconMI style={styles.icon} color="#C7C7CC" name="person"/>}
              style={styles.formField}
              ref='first_name'
              placeholder='Prénom'/>

            <InputField
              iconLeft={<IconMI style={styles.icon} size={24} color="#C7C7CC" name="person"/>}
              style={styles.formField}
              ref='last_name'
              placeholder='Nom'/>

            <DatePickerField ref='birthday'
              iconLeft={<Ionicon style={styles.icon} size={24} color="#C7C7CC" name="ios-calendar"/>}
              style={styles.formField}
              minimumDate={new Date('1/1/1900')}
              maximumDate={new Date()} mode='date' placeholder='Date de naissance'/>

            <InputField
              iconLeft={<Ionicon style={styles.icon} size={24} color="#C7C7CC" name="md-lock"/>}
              style={styles.formField}
              ref='password'
              placeholder='Mot de Passe'/>

            <InputField
              iconLeft={<Ionicon style={styles.icon} size={24} color="#C7C7CC" name="ios-mail"/>}
              style={styles.formField}
              ref='mail'
              placeholder='Adresse email'/>

            <InputField
              iconLeft={<Ionicon style={styles.icon} size={24} color="#C7C7CC" name="md-home"/>}
              style={styles.formField}
              ref='code_etablissement'
              placeholder='Code établissement'/>
          </Form>
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#DA8300'>
            <Text style={styles.buttonText}>INSCRIPTION</Text>
          </TouchableHighlight>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Vous avez déjà un compte ? <Text style={{fontWeight:'bold'}} onPress={this.goToLogin.bind(this)}>Cliquez ici</Text></Text>
          </View>
        </View>
      </View>
    );
  }
}

/* Demander les informations sur le sexe et le numéro de téléphone si besoin
<PickerField
  style={styles.formField} ref='gender' placeholder='Genre'
  options={{
    female: 'Feminin',
    male: 'Masculin'
}}/>
<InputField
  iconLeft={<IconMI style={styles.icon} size={24} color="#C7C7CC" name="phone"/>}
  style={styles.formField}
  ref='phone'
  placeholder='Téléphone'/>
*/

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

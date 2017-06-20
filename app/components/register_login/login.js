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
      name : 'Directeur_Accueil_0',
      passProps: {
      activite: 'Activité'
    }
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
            <Text style={styles.title}>BONJOUR !</Text>
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
          <View style={styles.footer}>
            <Text style={styles.footerText}> Mot de passe oublié ? <Text style={{fontWeight:'900'}}>Cliquez ici</Text></Text>
          </View>
        </View>

        <Image style={styles.separator} source={require('../../img/separator.png')}/>

        <TouchableHighlight
          style={styles.button}
          onPress={this.goToRegister.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText}> CREER UN COMPTE </Text>
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


  /*The form and its items*/
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
  formButtonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'avenir',
    letterSpacing: 2,
  },
  formButton: {
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


  button: {
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f39200',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'avenir',
    fontSize: 13,
    letterSpacing: 2,
    color: 'white',
    marginHorizontal:15,
  },

  separator: {
    width:300,
    resizeMode: 'contain',
    marginTop:10
  }

});

module.exports = Login;

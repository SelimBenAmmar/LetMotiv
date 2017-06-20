import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

class ClubSuperHeros extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Image source={require('../../img/club_super_heros.png')}
      style={styles.logo}/>

      <Text style={styles.titre}> Le club des super-héros </Text>

      <Text > Diffusion d’interviews de «super-héros»,
      «super-inspirants», «super-motivants»
      Nombre d’organisateurs conseillé : 5 </Text>

      <Text style={styles.soustitre}>  Modalités  </Text>
      <Text>
      Publics : Elèves, équipe pédagogique, parents, professionnels
      Classe/niveau : Premières
      Objectifs : Faire prendre conscience que les parcours ne sont pas
      linéaires, qu’ils sont ponctués d’échecs et de réussites et que la
      motivation personnelle est un moteur important.
      Organisation : Sur la base d’un guide d’entretien, l’action consiste
      à proposer aux élèves d’échanger 10 minutes avec le «super-hero»
      de leur choix. La restitution est une séance diffusion des vidéos.
      Pilotage : Responsable du centre de documentation,
      cadre pédagogique (vie scolaire, accompagnement personalisé)
      </Text>

      <Text style={styles.soustitre}> Réalisation / Production </Text>
      <Text> Séance diffusion des vidéos à laquelle tous les élèves, parents,
      équipe pédagogique et «super-héros» sont conviés. </Text>
      </View>
    );}
  }

  var styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: 'white',
    },
    logo: {
      height: 100,
      width: 100,
      margin:20,
    },
    titre: {
    },
    soustitre: {
    }
  });

module.exports = ClubSuperHeros;

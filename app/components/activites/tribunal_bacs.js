import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';


class TribunalBacs extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Image source={require('../../img/tribunal_bacs.png')}
      style={styles.logo}/>

      <Text style={styles.titre}> Class’Croute </Text>

      <Text > Défense/attaque des bacs sous forme d’un
      jeu théâtralisé avec juge, huissier, public …
      Nombre d’organisateurs conseillé : 5 </Text>

      <Text style={styles.soustitre}>  Modalités  </Text>
      <Text>
      Publics : Elèves, équipe pédagogique, parents
      Classe/niveau : Seconde
      Objectifs : Lever les stéréotypes sur les différents bacs.
      S’approprier des informations sur les poursuites d’études.
      Stimuler son esprit critique.
      Organisation : Répartition en petits groupes. Tirage au sort d’une
      des deux postures : avocat ou procureur. Tirage au sort d’un Bac
      Recherche documentaire et préparation de l’oral pour le Tribunal.
      Défense ou attaque de tous les bacs  sous forme de jeux
      théâtralisés avec juge , huissier, public,...
      Pilotage : Responsable du centre de documentation,
      cadre pédagogique (vie scolaire, accompagnement personalisé)
      CPE, Equipe du service de restautation.
      </Text>

      <Text style={styles.soustitre}> Réalisation / Production </Text>
      <Text> Représentation théâtrale devant un public d’élèves, de parents
      et l’équipe pédagogique. </Text>
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

module.exports = TribunalBacs;

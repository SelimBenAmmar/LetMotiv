import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';


class OrientExpress extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Image source={require('../../img/orient_express.png')}
      style={styles.logo}/>

      <Text style={styles.titre}> Orient’Express </Text>

      <Text > Rencontres entre élèves et professionnels
      selon les modalités du speed dating.
      Nombre d’organisateurs conseillé : 5 </Text>

      <Text style={styles.soustitre}>  Modalités  </Text>
      <Text>
      Publics : Professionnels et partenaires, élèves
      Classe/niveau : Terminale
      Objectifs : Élargir son réseau, diversifier les orientations
      Organisation : Mise en place d’un stand par professionnels,
      les élèves passeront de stand en stand toutes les 5 à 10 minutes.
      Pilotage : Responsable du centre de documentation,
      cadre pédagogique (vie scolaire, accompagnement personalisé).
      </Text>

      <Text style={styles.soustitre}> Réalisation / Production </Text>
      <Text> Formation de l’équipe d’organisateur ( Classe de première)
      Toutes les étapes de l’organisation sont détaillés par le kit outil.
      L’activité sera documenté (film, photo, interview ...)
      Pour les professionnels et partenaires :
      S’assurer que les objectifs du speed-dating sont partagés
      Prévoir de la documentation pour chaque stand afin de faciliter
      le 1er contact.
      Prévoir la possibilité de laisser les coordonnées aux élèves.
      </Text>
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

module.exports = OrientExpress;

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';


class ClassCroute extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Image source={require('../../img/class_croute.png')}
      style={styles.logo}/>

      <Text style={styles.titre}> Class’Croute </Text>

      <Text > Débat lors d’un pique-nique ou un repas au
      self entres élèves sur les «métiers du futur».
      Nombre d’organisateurs conseillé : 5 </Text>

      <Text style={styles.soustitre}>  Modalités  </Text>
      <Text>
      Publics : Elèves, équipe pédagogique, personnel de restauration
      Classe/niveau : Première
      Objectifs : Anticiper, inventer un futur créatif, innovant, ouvert.
      Préparer aux métiers de demain qui devront répondre aux
      besoins futurs. Enrichir les représentations sur les métiers et
      dépasser les stéréotypes. Construire un projet d’étude dans le
      présent pour un métier qui n’existe pas encore ou dont l’exercice
      sera différent.
      Organisation : Chaque participant présente un métier du futur,
      le débat est animé par les élèves organisateurs.
      Pilotage : Responsable du centre de documentation,
      cadre pédagogique (vie scolaire, accompagnement personalisé)
      CPE, Equipe du service de restautation.
      </Text>

      <Text style={styles.soustitre}> Réalisation / Production </Text>
      <Text> Discussion, élection de la meilleur présentation métier du futur </Text>
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

module.exports = ClassCroute;

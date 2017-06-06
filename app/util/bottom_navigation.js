import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Bottom_navigation extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Réservation"
          icon={<Icon size={24} color="white" name="tv" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Bons Plans"
          icon={<Icon size={24} color="white" name="tv" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Mes activités"
          icon={<Icon size={24} color="white" name="tv" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Mon compte"
          icon={<Icon size={24} color="white" name="account-circle" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Plus"
          icon={<Icon size={24} color="white" name="tv" />}
        />
      </BottomNavigation>
    )
  }
}

module.exports = Bottom_navigation;

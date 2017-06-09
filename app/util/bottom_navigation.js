import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import IconF from 'react-native-vector-icons/Foundation';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

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
          barBackgroundColor="#f39200"
          label="Réservation"
          icon={<IconF size={24} color="white" name="magnifying-glass" />}
        />
        <Tab
          barBackgroundColor="#f39200"
          label="Bons Plans"
          icon={<IconMCI size={24} color="white" name="wallet-giftcard" />}
        />
        <Tab
          barBackgroundColor="#f39200"
          label="Mes activités"
          icon={<IconF size={24} color="white" name="clipboard-notes" />}
        />
        <Tab
          barBackgroundColor="#f39200"
          label="Mon compte"
          icon={<IconMCI size={24} color="white" name="account-circle" />}
        />
        <Tab
          barBackgroundColor="#f39200"
          label="Plus"
          icon={<IconMCI size={24} color="white" name="dots-horizontal" />}
        />
      </BottomNavigation>
    )
  }
}

module.exports = Bottom_navigation;

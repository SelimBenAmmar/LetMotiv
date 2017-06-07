import React, { Component } from 'react';
import Calendar from 'react-native-calendar';
import moment from 'moment';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const customDayHeadings = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const customMonthNames = ['Janv','Févr','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


class Calendrier_Choix_Directeur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
    };
  }
  goToCalendar(){
  };
render() {
  return (
    <View style={styles.container}>
      <Calendar
        ref="calendar"
        eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
        events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
        scrollEnabled
        showControls
        dayHeadings={customDayHeadings}
        monthNames={customMonthNames}
        titleFormat={'MMMM YYYY'}
        prevButtonText={'Prev'}
        nextButtonText={'Next'}
        onDateSelect={(date) => this.setState({ selectedDate: date })}
        onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
        onTouchNext={(e) => console.log('onTouchNext: ', e)}
        onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
        onSwipeNext={(e) => console.log('onSwipeNext', e)}
      />

        <TouchableHighlight
        onPress={this.goToCalendar.bind(this)}
        underlayColor="white">
      <Text>1h</Text>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={this.goToCalendar.bind(this)}
        underlayColor="white">
      <Text>2h</Text>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={this.goToCalendar.bind(this)}
        underlayColor="white">
      <Text>4h</Text>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={this.goToCalendar.bind(this)}
        underlayColor="white">
      <Text>1 jour</Text>
        </TouchableHighlight>

     </View>
   )};
 }
module.exports = Calendrier_Choix_Directeur;

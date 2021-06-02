//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
import styles from '../assets/stylesheets/Styles';
import MapAPI from "../scripts/MapAPI";


// MAIN //
class Main2 extends Component {

	render() {
    return(
      <View style = { styles.body } >

        <View style={styles.content1}>
          <Text style={styles.title}>Google Map API test</Text>
        </View>

        <View style={styles.content1}>
          <MapAPI />
        </View>

      </View>
    ); 
  }
}

export default Main2;
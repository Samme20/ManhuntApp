//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
import styles from "./Styles";
import GeoLocator from "./GeoLocator";
import { HunterButton } from './Hunter';
import { HuntedButton } from './Hunted';
import MainScreen from './MainScreen';


// MAIN //
export default class App extends Component {

	render() {
    return(
      <MainScreen/>
    ); 
  }
}
//Import React
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'


//Import Files

import MainScreen from './src/screens/MainScreen';
import Main2 from './src/screens/Main2';

// MAIN //
const Stack = createStackNavigator();
export default class App extends Component {
  
	render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={MainScreen}/>
          <Stack.Screen name="Test" component={Main2}/>
        </Stack.Navigator>
      </NavigationContainer>
    ); 
  }
}

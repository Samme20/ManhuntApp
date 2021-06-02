//Import React
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//Import Files
import HomeScreen from './src/screens/HomeScreen';
import MapTest from './src/screens/MapTest';
import Settings from './src/screens/Settings';

// MAIN //
const Stack = createStackNavigator();
export default class App extends Component {
  
	render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{animationEnabled:false}}/>
          <Stack.Screen name="MapTest" component={MapTest} options={{animationEnabled:false}}/>
          <Stack.Screen name="Settings" component={Settings} options={{animationEnabled:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    ); 
  }
}

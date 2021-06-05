//Import React
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//Import Files
import MainScreen from './src/screens/MainScreen';
import MapTest from './src/screens/MapTest';
import Settings from './src/screens/Settings';
import UserScreen from './src/screens/UserScreen';
import LoginScreen from './src/screens/LoginScreen';

// MAIN //
const Stack = createStackNavigator();
export default class App extends Component {
  
	render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' headerMode="none" mode="modal">
          <Stack.Screen name="Main" component={MainScreen} options={{animationEnabled:false}}/>
          <Stack.Screen name="MapTest" component={MapTest} options={{animationEnabled:false}}/>
          <Stack.Screen name="Settings" component={Settings} options={{animationEnabled:false}}/>
          <Stack.Screen name="User" component={UserScreen} options={{animationEnabled:false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{animationEnabled:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    ); 
  }
}

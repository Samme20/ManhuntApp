//Import React
import React, { Component } from 'react';
import { View, Text, Button, Permission, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
//Import Files
import stylesd from "../assets/stylesheets/Styles-dark";
import stylesl from "../assets/stylesheets/Styles-light";

import MapView, {Marker} from 'react-native-maps';

class GeoLocator extends Component {
    constructor() {
        super();
        this.state = {
            location: null,
            errorMessage: null
        }
    }

    findCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);

                const latitudeDelta = JSON.stringify(position.coords.latitudeDelta);
                const longitudeDelta = JSON.stringify(position.coords.longitudeDelta);

                this.setState({
                    latitude,
                    longitude,
                    latitudeDelta, // tror inte man  behöver  dessa, de är typ  alltid samma
                    longitudeDelta, // -||-
                });
            },
            { enableHighAccuracy: true, timeOut: 1000, maximumAge: 20}
        );
    };
    
    findCurrentLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status != 'granted') {
            this.setState({
                errorMessage: 'To be able to play the game, you have to grant us access to your location.'
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    render() {
        return(
            <View>
            <TouchableOpacity onPress={this.findCurrentLocationAsync}>
            { !this.state.location && 
                (<Text style={stylesd.text}>Location text</Text>) }
            { this.state.errorMessage && 
            (<Text style={stylesd.text}>{this.state.error}</Text>) }
            { this.state.location && 
            (<MapView style={stylesd.map} 
                initialRegion={{
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                      <Marker
                    coordinate={{latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude}}
                    title="This is you!"
                    description="your current pos"
                />
                  </MapView>) 
            }
            </TouchableOpacity>
        </View>
        ); 
    }
}

export default GeoLocator;



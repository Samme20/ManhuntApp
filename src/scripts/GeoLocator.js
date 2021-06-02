//Import React
import React, { Component } from 'react';
import { View, Text, Button, Permission, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
//Import Files
import styles from "../assets/stylesheets/Styles";

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

                this.setState({
                    latitude,
                    longitude,
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
                    (<Text style={styles.text}>Location text</Text>) }
                { this.state.errorMessage && 
                (<Text style={styles.text}>{this.state.error}</Text>) }
                { this.state.location && 
                (<Text style={styles.text}>
                Latitude: {this.state.location.coords.latitude} Longitude: {this.state.location.coords.longitude}</Text>) 
                }
                </TouchableOpacity>
            </View>
        ); 
    }
}

export default GeoLocator;



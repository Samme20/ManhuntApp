//Import React
import React, { Component } from 'react';
import { View, Text, Button, Permission } from 'react-native';
//Import Files
import styles from "./Styles";

export default class GeoLocator extends Component {
    constructor() {
        super();
        this.state = {
            ready: false,
            where: { lat: null, lng: null },
            error: null
        }
    }
    componentDidMount() {
        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 2000,
            maximumAge: 6
        };
        this.setState({ ready: false, error: null });
        navigator.geolocation.getCurrentPosition(this.geoSuccess,
            this.geoFailure,
            geoOptions);
    }
    geoSuccess = (position) => {

        this.setState({
            ready: true,
            where: { lat: position.coords.latitude, lng: position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({ error: err.message });
    }

    render() {
        return(
            <View>
                { !this.state.ready && 
                    (<Text style={styles.text}>Location text</Text>) }
                { this.state.error && 
                (<Text style={styles.text}>{this.state.error}</Text>) }
                { this.state.ready && 
                (<Text style={styles.text}>
                Latitude {this.state.where.lat} Longitude: {this.state.where.lng}</Text>) 
                }
            </View>
        ); 
    }
}


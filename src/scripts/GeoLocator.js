//Import React
import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import * as Location from "expo-location";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import mapStyle from "../assets/images/style.json";

class GeoLocator extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      errorMessage: null,
    };
  }

  findCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        const latitudeDelta = JSON.stringify(position.coords.latitudeDelta);
        const longitudeDelta = JSON.stringify(position.coords.longitudeDelta);

        this.setState({
          latitude,
          longitude,
          latitudeDelta, // tror inte man  behöver  dessa, de är typ  alltid samma
          longitudeDelta, // -||- då kan du ta bort dem :)
        });
      },
      { enableHighAccuracy: true, timeOut: 1000, maximumAge: 20 }
    );
  };

  findCurrentLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status != "granted") {
      this.setState({
        errorMessage:
          "To be able to play the game, you have to grant us access to your location.",
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  goBack = () => {
    this.setState({ location: null })
  }

  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={1} onPress={this.findCurrentLocationAsync}>
          {!this.state.location && (
            <View style={styles.preMapContainer}>
              <Text style={styles.mapTitle}>Google Map API test</Text>
              <Text style={styles.mapText}>Click me UwU!</Text>
            </View>
          )}
          {this.state.errorMessage && (
            <Text style={styles.text}>{this.state.error}</Text>
          )}
          {this.state.location && (
            <View style={styles.mapContainer}>
              <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                  latitude: this.state.location.coords.latitude,
                  longitude: this.state.location.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                  }}
                  image={require('../assets/images/mapMarker.png')}
                  title="This is you!"
                  description="your current pos"
                // set image={image} så har ni custom marker :)
                />
              </MapView>
              <TouchableOpacity style={styles.closeBtn} onPress={this.goBack}>
                <Text style={styles.closeBtnText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>

      </View>
    );
  }
}

//Styles

//If dark
const ColorStyle = require('../assets/Json/darkStyle.json');

//if light
//const ColorStyle = require('../assets/Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];


const styles = StyleSheet.create({
  preMapContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 175,
  },
  mapTitle: {
    color: maxred,
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 30,
  },
  mapText: {
    color: lemon,
    fontSize: 30,
    textAlign: 'center',
  },
  mapContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  closeBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    margin: 20,
  },
  closeBtnText: {
    color: '#000000',
    fontSize: 59,
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    color: lemon,
    fontSize: 30,
    margin: 10,
  },
});

export default GeoLocator;

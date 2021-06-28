//Import React
import React, { useState } from "react";
import { Switch, AsyncStorage, StyleSheet } from "react-native";
//Import Files
//import config from "../Json/Config.json";

var config = require("../Json/Config.json");


const Modeswitch = function () {
  const [isEnabled, setIsEnabled] = useState(config.dark);
  const toggleSwitch = (isEnabled) => {
    setIsEnabled((previousState) => !previousState);
    config.dark = isEnabled;
    console.log(isEnabled);
    AsyncStorage.setItem("config:dark", toString(isEnabled));
  };

  return (
    <Switch
      trackColor={{
        false: ColorStyle["prusblue"],
        true: ColorStyle["prusblue"],
      }}
      thumbColor={isEnabled ? ColorStyle["switchOn"] : ColorStyle["orange"]}
      ios_backgroundColor={ColorStyle["prusblue"]}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.darklightmodeswitch}
    />
  );
};

//Styles

//If dark
const ColorStyle = require('../Json/lightStyle.json');

//if light
//const ColorStyle = require('../assets/Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];

const styles = StyleSheet.create({
  darklightmodeswitch: {
    width: 45,
    height: 23,
  },
});
export default Modeswitch;

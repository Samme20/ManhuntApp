//Import React
import React, { useState } from "react";
import {
  Switch,
  AsyncStorage,
} from "react-native";
//Import Files
import stylesd from "../stylesheets/Styles-darkold";
//import config from "../Json/Config.json";

var config = require("../Json/Config.json");

//If(light mode == true)
const ColorStyle = require('../Json/lightStyle.json');

//If (light mode == false)
//const ColorStyle = require('../Json/darkStyle.json');  //EXAMPLE

const Modeswitch = function () {
  const [isEnabled, setIsEnabled] = useState(config.dark);
  const toggleSwitch = isEnabled => {
    setIsEnabled((previousState) => !previousState);
    config.dark = isEnabled;
    console.log(isEnabled);
    AsyncStorage.setItem("config:dark", toString(isEnabled));
  };

  return (
    <Switch
      trackColor={{ false: ColorStyle["prusblue"], true: ColorStyle["prusblue"] }}
      thumbColor={isEnabled ? ColorStyle["switchOn"] : ColorStyle["orange"]}
      ios_backgroundColor= { ColorStyle["prusblue"] }
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={stylesd.darklightmodeswitch}
    />
  );
};

export default Modeswitch;

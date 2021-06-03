//Import React
import React, {useState} from 'react';
import { Text, Image, TouchableOpacity ,Switch, AsyncStorage } from 'react-native';
//Import Files
import stylesd from "../stylesheets/Styles-darkold";
import stylesl from "../stylesheets/Styles-lightold";
import config  from '../../../Config.json';



const Modeswitch = function () {
    const [isEnabled, setIsEnabled] = useState(config.dark);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        config.dark = isEnabled;
        console.log(isEnabled);
        AsyncStorage.setItem('config:dark',toString(isEnabled))
    };
    

    return (
        <Switch
        trackColor={{ false: "#003049", true: "#003049" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#F77F00"}
        ios_backgroundColor="#003049"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={stylesd.darklightmodeswitch}
      />
    )
}

export default Modeswitch;
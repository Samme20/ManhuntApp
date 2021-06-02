import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity, Image} from 'react-native';
import stylesd from "../stylesheets/Styles-dark";
import stylesl from "../stylesheets/Styles-light";
import React, { useState } from 'react';

import settingsimage from "../images/settingsicon-dark.png";

export const Settingsbtn = function () {

    const [click, setClick] = useState(false);

    return (
        <TouchableOpacity>
            <Image source={settingsimage} style={stylesd.settingimagestyle}/>
        </TouchableOpacity>

    )
}
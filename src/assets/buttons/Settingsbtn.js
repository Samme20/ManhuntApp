import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity, Image} from 'react-native';
import styles from "../stylesheets/Styles";
import ScreenChanger from "../../scripts/ScreenChanger";
import React, { useState } from 'react';

import settingsimage from "../images/settingsicon.png";

export const Settingsbtn = function () {

    const [click, setClick] = useState(false);

    return (
        <TouchableOpacity>
            { !click == true &&
                (<Image source={settingsimage} style={styles.settingimagestyle}/>)}
            { click == true &&
                (<ScreenChanger />)
            }
        </TouchableOpacity>

    )
}
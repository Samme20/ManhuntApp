import { StyleSheet, Button, Dimensions } from 'react-native';

//Main theme colors
var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: prusblue,
        width: Dimensions.get('window').width,
    },
    background: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    backgroundGradient: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    backgroundGradient_imageStyle: {},
    header: {
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get('window').width - 30 //verkar som att skärmen är 30 l.e för stor eller liknande...
    },
    titleHelper: {
        top: 0,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 40,
        height: 40,
        justifyContent: "center"
    },
    user: {
        color: lemon,
        fontSize: 40,
        alignSelf: "center"
    },
    username: {
        color: lemon,
        fontSize: 24,
        alignSelf: "center",
        flex: 1
      },
    button2: {
        width: 41,
        height: 44,
        justifyContent: "center"
    },
    settings: {
        color: lemon,
        fontSize: 45,
        marginLeft: -2,
        marginRight: -2
    },
    group: {
        height: 232,
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 346,
        marginLeft: 21,
        marginRight: 20
    },
    hunterButton: {
        height: 54,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        backgroundColor: orange,
        borderRadius: 6
    },
    hunter: {
        color: lemon,
        fontSize: 24
    },
    huntedButton: {
        width: 200,
        height: 54,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: orange
    },
    hunted: {
        color: lemon,
        fontSize: 24
    },
    headerColumn: {
        marginTop: 62,
        marginLeft: 16,
        marginRight: 17
    },
    headerColumnFiller: {
        flex: 1
    },
    footer: {
        flexDirection: "row",
        height: 20,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
        marginLeft: 37,
        marginRight: 37
    },
    fugo2021: {
        color: black,
        alignSelf: "center"
    },
    helpButton: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    help: {
        color: black,
        alignSelf: "flex-start"
    },
    backButton: {
        flexDirection: "row",
        width: 40,
        height: 44,
        alignItems: "center",
        justifyContent: "center"
    },
    pictureForm: {
        height: 229,
        justifyContent: "space-around",
        alignItems: "flex-start",
        flex: 0.14,
        width: 292,
        marginTop: 79,
        marginLeft: 44,
        marginRight: 45
      },
      userPicture: {
        width: 160,
        height: 160,
        alignSelf: "center"
      },
      pictureButton: {
        height: 36,
        width: 292,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center"
      },
      changePicture: {
        color: lemon,
        fontSize: 18,
        height: 22,
        width: 127
      },
      cameraIcon: {
        color: lemon,
        fontSize: 25
      },
      userForm: {
        height: 402,
        justifyContent: "space-around",
        alignItems: "flex-start",
        flex: 0.14,
        width: 292,
        marginLeft: 44,
        marginRight: 45
      },
      privacyButton: {
        height: 22,
        width: 292,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center"
      },
      privacySettings: {
        color: lemon,
        fontSize: 18,
        height: 22,
        width: 127
      },
      rightArrow: {
        color: lemon,
        fontSize: 25
      },
    backIcon: {
        color: lemon,
        fontSize: 40
    },
    form1: {
        top: 166,
        left: 0,
        height: 258,
        position: "absolute",
        right: 0,
        justifyContent: "space-between",
        alignItems: "center"
    },
    settingForm: {
        top: 0,
        left: 0,
        height: 647,
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "flex-start",
        right: 146
    },
    darkMode: {
        color: lemon,
        fontSize: 18
    },
    valueForm: {
        top: 0,
        left: 146,
        height: 647,
        position: "absolute",
        alignItems: "flex-end",
        justifyContent: "space-between",
        right: 0
    },
    switch: {},
    form1Stack: {
        height: 647,
        marginTop: 51,
        marginLeft: 44,
        marginRight: 45
    },
    text: {
        color: lemon,
        fontSize: 24
    },  
});

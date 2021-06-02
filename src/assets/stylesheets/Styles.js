import { StyleSheet, Button } from 'react-native';


//Main theme colors
var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";

export default StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: lemon,
    },
    title: {
        color: maxred,
        fontSize: 60,
        borderBottomWidth: 3,
        borderBottomColor: maxred,
    },
    content1: {
        flex: 1,
        justifyContent: 'center',
    },
    mainButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    huntedButton: {
        margin: 30,
        backgroundColor: orange,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    huntedButtonText: {
        fontSize: 50,
        color: prusblue,
    },
    hunterButton: {
        margin: 30,
        backgroundColor: orange,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    hunterButtonText: {
        fontSize: 50,
        color: prusblue,
    },
    text: {
        color: prusblue,
        fontSize: 30,
        margin: 10,
    },
    socialButton: {
        width: 100,
        height: 100,
    },
    input: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 5,
    },
    settingimagestyle:{
        width:47,
        height:47,
        position:'absolute',
        top:-50,
        left:120,
        right:0,
        bottom:0,
    }
});
import { StyleSheet, Button, Dimensions } from 'react-native';


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
    topcontent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },    
    content1: {
        flex: 1,
        justifyContent: 'center',
    },
    content2: {
        paddingLeft: 220,
        paddingBottom: 50,
        flex: 1,
        justifyContent: 'center',
    },
    contentmap: {
        flex: 2,
        alignItems: 'center',
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
        width: 40,
        height: 40,
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/3,
    },
});
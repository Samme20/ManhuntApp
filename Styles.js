import { StyleSheet, Button } from 'react-native';


//Colors
var lemon = "#EAE2B7";
var red = "#D62828";
var blue = "#003049";

export default StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: lemon,
    },
    title: {
        color: red,
        fontSize: 42,
    },
    content1: {
        flex: 1.5,
        justifyContent: 'center',
    },
    huntedButtons: {
        flex: 2,
        height: 10,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: blue,
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
});
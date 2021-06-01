import { StyleSheet } from 'react-native';

//Colors
var lemon = "#EAE2B7";
var red = "#D62828";
var blue = "#003049";

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: lemon,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: lemon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: lemon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: red,
    fontSize: 42,
  },
  text: {
    color: blue,
    fontSize: 30,
    margin: 10,
  },
  socialButton: {
    width: 100,
    height: 100,
  }
});
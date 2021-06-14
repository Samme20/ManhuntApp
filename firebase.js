import { firebase } from '@firebase/app'
import '@firebase/auth';
import '@firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyD1RgKhBamfXafC7Yy42mXh-GHeW0EnXaw",
    authDomain: "worldscape-8caa9.firebaseapp.com",
    projectId: "worldscape-8caa9",
    storageBucket: "worldscape-8caa9.appspot.com",
    messagingSenderId: "1023379009979",
    appId: "1:1023379009979:web:eae66904aeb8805ee0549e",
    measurementId: "G-D2KNQXVS8W"
  };
  let app;
  if (!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  export {db,auth};
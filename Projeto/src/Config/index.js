import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_HhRX0u3EH69i929TAaBfz0p325_tKes",
    authDomain: "api-techtitans.firebaseapp.com",
    databaseURL: "https://api-techtitans-default-rtdb.firebaseio.com",
    projectId: "api-techtitans",
    storageBucket: "api-techtitans.appspot.com",
    messagingSenderId: "812962635518",
    appId: "1:812962635518:web:f8783622ce59af4a500faf"
  };
  
  if(firebase.app.lenght === 0){
    Firebase = firebase.initializeApp(firebaseConfig);
  }

  export default Firebase;

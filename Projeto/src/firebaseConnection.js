import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA_HhRX0u3EH69i929TAaBfz0p325_tKes",
  authDomain: "api-techtitans.firebaseapp.com",
  databaseURL: "https://api-techtitans-default-rtdb.firebaseio.com",
  projectId: "api-techtitans",
  storageBucket: "api-techtitans.appspot.com",
  messagingSenderId: "812962635518",
  appId: "1:812962635518:web:f8783622ce59af4a500faf"
};

// Initialize Firebase
if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig);
}

export default Firebase;
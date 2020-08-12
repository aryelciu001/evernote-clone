import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration 
// Initialize Firebase
let apiKey = process.env.REACT_APP_API_KEY
firebase.initializeApp(
  {
    apiKey: {apiKey},
    authDomain: "evernoteclone-1b3dd.firebaseapp.com",
    databaseURL: "https://evernoteclone-1b3dd.firebaseio.com",
    projectId: "evernoteclone-1b3dd",
    storageBucket: "evernoteclone-1b3dd.appspot.com",
    messagingSenderId: "651281430873",
    appId: "1:651281430873:web:13beeaf0de67ab9109b448"
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

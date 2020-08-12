import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration 
// Initialize Firebase
// let apiKey = process.env.REACT_APP_API_KEY
// let apiKey = process.env.REACT_APP_API_KEY
// let apiKey = process.env.REACT_APP_AUTH_DOMAIN
// let apiKey = process.env.REACT_APP_DB_URL
// let apiKey = process.env.REACT_APP_PROJECT_ID
// process.env.REACT_APP_STORAGE_BUCKET
// process.env.REACT_APP_SENDER_ID
// process.env.REACT_APP_APP_ID
firebase.initializeApp(
  {
    apiKey: AIzaSyAAxZaHlIia7KRBhMom9Ddfx3GYzWuHgiM,
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

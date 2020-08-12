import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration 
// Initialize Firebase
let apiKey = process.env.REACT_APP_API_KEY
let authDomain = process.env.REACT_APP_AUTH_DOMAIN
let databaseURL = process.env.REACT_APP_DB_URL
let storageBucket = process.env.REACT_APP_STORAGE_BUCKET
let messagingSenderId = process.env.REACT_APP_SENDER_ID
let appId = process.env.REACT_APP_APP_ID
firebase.initializeApp(
  {
    apiKey,
    authDomain,
    databaseURL,
    projectId: "evernoteclone-1b3dd",
    storageBucket,
    messagingSenderId,
    appId
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

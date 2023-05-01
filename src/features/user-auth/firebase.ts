// Import the functions you need from the SDKs you need

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCpvxGqK09C3BazAA9z55hj_AsuGxoLzHU',

  authDomain: 'graphiql-app-aab63.firebaseapp.com',

  projectId: 'graphiql-app-aab63',

  storageBucket: 'graphiql-app-aab63.appspot.com',

  messagingSenderId: '808457057185',

  appId: '1:808457057185:web:1a2f0967fe4fff88a951e0',

  measurementId: 'G-XJBTWF8QML',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

const logInWithEmailAndPassword = async (email, password) => {
  const auth = ''
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

/*
  This code is very simple. 
  Since we know that the user is already registered with us, 
  we don’t need to check the database
*/

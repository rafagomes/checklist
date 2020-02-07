import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAFhKSW-ZH7zUX7m86EvlmW0sZELnNyxY",
    authDomain: "airplane-checklist.firebaseapp.com",
    databaseURL: "https://airplane-checklist.firebaseio.com",
    projectId: "airplane-checklist",
    storageBucket: "airplane-checklist.appspot.com",
    messagingSenderId: "904786937900",
    appId: "1:904786937900:web:0e7d60c3b2ceb0cde3e989",
    measurementId: "G-R2T1M1Y5H4"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
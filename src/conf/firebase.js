import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATYFNsBQcZrdqtIFAXSXJBWqYKuv2xq84",
    authDomain: "podsfy.firebaseapp.com",
    databaseURL: "https://podsfy.firebaseio.com",
    projectId: "podsfy",
    storageBucket: "podsfy.appspot.com",
    messagingSenderId: "138675775988"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAWrUfRo1k1yzHwlLkpv3Qb1rcxNNAfISU",
    authDomain: "podsfy-dev.firebaseapp.com",
    databaseURL: "https://podsfy-dev.firebaseio.com",
    projectId: "podsfy-dev",
    storageBucket: "podsfy-dev.appspot.com",
    messagingSenderId: "253381475927"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;

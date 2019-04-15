import {initializeApp} from 'firebase';

const app = initializeApp({
        apiKey: "AIzaSyARrH_VqqXyCLwtjKQF2pkiP7QpAP1t_PM",
        authDomain: "testproject-ccf1e.firebaseapp.com",
        databaseURL: "https://testproject-ccf1e.firebaseio.com",
        projectId: "testproject-ccf1e",
        storageBucket: "testproject-ccf1e.appspot.com",
        messagingSenderId: "43908114827"
});

export const db = app. database();
export const namesRef = db.ref("names");
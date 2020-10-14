import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTDpTVQAGowU4S-eImEPH4zhQyyF6WeFE",
    authDomain: "facebook-clone-a38ac.firebaseapp.com",
    databaseURL: "https://facebook-clone-a38ac.firebaseio.com",
    projectId: "facebook-clone-a38ac",
    storageBucket: "facebook-clone-a38ac.appspot.com",
    messagingSenderId: "1053319111987",
    appId: "1:1053319111987:web:7c42ec8a2a42c51af18a46",
    measurementId: "G-NTKYT3WTBD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
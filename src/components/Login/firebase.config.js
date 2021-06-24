import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsICfq50yeXGuAi7Gob8-iXlynVODgBlw",
    authDomain: "blogger-diaries.firebaseapp.com",
    projectId: "blogger-diaries",
    storageBucket: "blogger-diaries.appspot.com",
    messagingSenderId: "995565937831",
    appId: "1:995565937831:web:13c93bf0c5cb59939fa782"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth()

export { provider, auth }
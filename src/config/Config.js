import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDff1NdvHwX-8fnHDg8KcQoVqb6W-q5OKk",
    authDomain: "reactjs-entregafinal-coder.firebaseapp.com",
    projectId: "reactjs-entregafinal-coder",
    storageBucket: "reactjs-entregafinal-coder.appspot.com",
    messagingSenderId: "670788449758",
    appId: "1:670788449758:web:ab1e3ae31ae9b60c34994f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage }
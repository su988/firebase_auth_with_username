import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB8K1RgbeZRBYPzq-Tztj1-BEd9bxnmwTk',
  authDomain: 'blog-f7255.firebaseapp.com',
  projectId: 'blog-f7255',
  storageBucket: 'blog-f7255.appspot.com',
  messagingSenderId: '813692669430',
  appId: '1:813692669430:web:78aa6a3945d8c513308bd7'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

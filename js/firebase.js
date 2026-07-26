import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

const firebaseConfig = {

  apiKey: "AIzaSyDSmSlbV9frqwJBN5HLxEsJcRPZRAWuEjM",

  authDomain: "zahed-6b455.firebaseapp.com",

  projectId: "zahed-6b455",

  storageBucket: "zahed-6b455.firebasestorage.app",

  messagingSenderId: "1083482711534",

  appId: "1:1083482711534:web:8a60e365eb65cad7ab9aff"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export {
collection,
addDoc,
getDocs,
getDoc,
setDoc,
updateDoc,
deleteDoc,
doc,
query,
where,
orderBy,
onSnapshot,
serverTimestamp,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
};

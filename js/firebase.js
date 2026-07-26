// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set,
    get,
    update,
    remove,
    onValue
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSmSlbV9frqwJBN5HLxEsJcRPZRAWuEjM",
    authDomain: "zahed-6b455.firebaseapp.com",
    databaseURL: "https://zahed-6b455-default-rtdb.firebaseio.com",
    projectId: "zahed-6b455",
    storageBucket: "zahed-6b455.firebasestorage.app",
    messagingSenderId: "1083482711534",
    appId: "1:1083482711534:web:8a60e365eb65cad7ab9aff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Realtime Database
const db = getDatabase(app);

export { db, ref, push, set, get, update, remove, onValue };

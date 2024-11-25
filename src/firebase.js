import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzqEmcrc9rS-s-BAylVXrZFJ5P-6AEVIE",
    authDomain: "techmoms-79501.firebaseapp.com",
    projectId: "techmoms-79501",
    storageBucket: "techmoms-79501.firebasestorage.app",
    messagingSenderId: "500958498909",
    appId: "1:500958498909:web:9c6a5c7e76f40704f9bdb4",
    measurementId: "G-Q25KND89MP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);



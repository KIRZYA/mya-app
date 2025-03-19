
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyJ0zPrkf0aZoAbn5QgP9Al0SZjqD5rnI",
    authDomain: "project-mistt.firebaseapp.com",
    databaseURL: "https://project-mistt-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-mistt",
    storageBucket: "project-mistt.firebasestorage.app",
    messagingSenderId: "705790643893",
    appId: "1:705790643893:web:63486074fa3161d69878fc",
    measurementId: "G-ZLD2GNNB7G"
};
const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
};

const signOutUser = async () => {
    await signOut(auth);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db, auth, collection, addDoc, query, orderBy, getDocs, deleteDoc, doc, signInWithGoogle, signOutUser };
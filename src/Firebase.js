// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsFATCqM5oQ1VGDVaT2L0AiEn-PPeF8JA",
    authDomain: "robocon-6a7e7.firebaseapp.com",
    projectId: "robocon-6a7e7",
    storageBucket: "robocon-6a7e7.appspot.com",
    messagingSenderId: "703559768857",
    appId: "1:703559768857:web:8fe32c157b538e31e98388",
    databaseURL: "https://robocon-6a7e7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
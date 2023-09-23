import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKvoefqsHZBt0Kc5XNPbuV2ugqAM3n8nM",
    authDomain: "robo-altium.firebaseapp.com",
    databaseURL: "https://robo-altium-default-rtdb.firebaseio.com",
    projectId: "robo-altium",
    storageBucket: "robo-altium.appspot.com",
    messagingSenderId: "197623458461",
    appId: "1:197623458461:web:2ce7904d05fa313ecfc274",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to Firebase Storage
const storage = getStorage(app);

export { storage };
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

import { getFirestore } from '@firebase/firestore';



const firebaseConfig = {

    apiKey: "AIzaSyAV6qtCgs1qhk_aQS7xGoVfxqHcKRCPPxg",

    authDomain: "app-hackathon-abf4e.firebaseapp.com",

    databaseURL: "https://app-hackathon-abf4e-default-rtdb.firebaseio.com",

    projectId: "app-hackathon-abf4e",

    storageBucket: "app-hackathon-abf4e.appspot.com",

    messagingSenderId: "283425791952",

    appId: "1:283425791952:web:5132d69450ae8f7f3823d5",

    measurementId: "G-JDGD639H1T"

};



const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);



export const auth = getAuth(app);
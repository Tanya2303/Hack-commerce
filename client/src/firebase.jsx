import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyArmetRiJhRYZUtdT_Rto1or_Y25sbQpek",
    authDomain: "ecogreen-57965.firebaseapp.com",
    projectId: "ecogreen-57965",
    storageBucket: "ecogreen-57965.appspot.com",
    messagingSenderId: "520903613492",
    appId: "1:520903613492:web:b59b3ec67ca9e33de4fe61",
    measurementId: "G-2BZ9G92J7F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
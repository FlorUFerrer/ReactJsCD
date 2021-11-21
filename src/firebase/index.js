import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC77Ole0uaYspO7cAukvjJeIVCXjcT-Rd0",
    authDomain: "infoor-ecommerce.firebaseapp.com",
    projectId: "infoor-ecommerce",
    storageBucket: "infoor-ecommerce.appspot.com",
    messagingSenderId: "26518768877",
    appId: "1:26518768877:web:755b32e7fb533940d210e4"
};

 const app = initializeApp(firebaseConfig);
 export const getFirebase = () => app;

 export { getFirestore  };

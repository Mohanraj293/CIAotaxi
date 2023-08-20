// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJGyCCiYI4yK3be2_rMZxN054rX1BObSg",
  authDomain: "ciao-taxi.firebaseapp.com",
  databaseURL: "https://ciao-taxi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ciao-taxi",
  storageBucket: "ciao-taxi.appspot.com",
  messagingSenderId: "924877746365",
  appId: "1:924877746365:web:be2e7bd721e565295c87d4",
  measurementId: "G-L39T1KBYWJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;

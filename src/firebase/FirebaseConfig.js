// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFylYoxAOEAqmU3Y0-f1GlORGqkCImEYo",
  authDomain: "ciao-9e33a.firebaseapp.com",
  databaseURL: "https://ciao-9e33a-default-rtdb.firebaseio.com",
  projectId: "ciao-9e33a",
  storageBucket: "ciao-9e33a.appspot.com",
  messagingSenderId: "992037782511",
  appId: "1:992037782511:web:9be6b699969c4994746c1a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;

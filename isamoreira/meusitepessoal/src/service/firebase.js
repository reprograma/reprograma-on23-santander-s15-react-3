// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQFwph8SHopoxg3mTRstkDi9tjXa4Moo",
  authDomain: "meusitepessoal-1611e.firebaseapp.com",
  projectId: "meusitepessoal-1611e",
  storageBucket: "meusitepessoal-1611e.appspot.com",
  messagingSenderId: "532579885959",
  appId: "1:532579885959:web:d298c39b6b30166bac2922",
  databaseURL: "https://meusitepessoal-1611e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDatabase()
export default database
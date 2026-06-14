import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

// Option 2: Wrap your module logic in an event listener
//alert("load.js loaded");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const userId = "/MpnSlLCG7aSQov9EjMUBt6yO6Ep2";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5zQZnQsZsPxGRosGIDncS47xIDz_w7cw",
  authDomain: "alix-ad710.firebaseapp.com",
  databaseURL: "https://alix-ad710.firebaseio.com",
  projectId: "alix-ad710",
  storageBucket: "alix-ad710.appspot.com",
  messagingSenderId: "341389404751",
  appId: "1:341389404751:web:f1d9ec493179747885983a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();


signInWithEmailAndPassword(auth, "mq@i.net", "ils66476").then((userCredential) => {
    console.log("Signed in as:", user.email);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.error("Error signing in:", errorCode, errorMessage);
});


auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User is signed in:", user.email);

    const kayitRef = ref(db, userId + '/users');
onValue(kayitRef, (snapshot) => {
  const kayitlar = snapshot.val();
  console.log(kayitlar);
  
});
   
    } else {
    console.log("No user is signed in.");
  }
});
const option1 = document.createElement("option");
option1.text = "Option 1";
document.getElementById("myselect").appendChild(option1);
const option2 = document.createElement("option");
option2.text = "Option 2";
document.getElementById("myselect").appendChild(option2);
const option3 = document.createElement("option");
option3.text = "Option 3";
document.getElementById("myselect").appendChild(option3);


/*
const firebaseConfig = {
  apiKey: "AIzaSyAoK2ZOMvOxpwqhZIgfQ48O5bLbdeGtjDA",
  authDomain: "syrialinkx.firebaseapp.com",
  databaseURL: "https://syrialinkx.firebaseio.com",
  projectId: "syrialinkx",
  storageBucket: "syrialinkx.appspot.com",
  messagingSenderId: "879365390863",
  appId: "1:879365390863:web:1d13c7b4db21a99f70597a"
};
*/

import {hello,xc} from "./xmod.js";

hello("hix");
var cc = xc(22);
document.getElementById("input").value = xc(2);
//var select = 
document.getElementById("myselect").value = xc(33);
var option = document.createElement("option");
option.text = cc;
option.value = cc;
select.add(option);
 $(document).ready(function(){
  ('#myselect').trigger("chosen:updated");
 });
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA5zQZnQsZsPxGRosGIDncS47xIDz_w7cw",
  authDomain: "alix-ad710.firebaseapp.com",
  databaseURL: "https://alix-ad710.firebaseio.com",
  projectId: "alix-ad710",
  storageBucket: "alix-ad710.appspot.com",
  messagingSenderId: "341389404751",
  appId: "1:341389404751:web:f1d9ec493179747885983a"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const reference = database.ref('company');

var sender = document.getElementById("output").value;



  function updateUserAccountAndAll(user,cur, count) {
        database.ref(user).child("account").child(cur).child("count").transaction( (mutableData)=> {
           
               // mutableData.set(mutableData.get() == null ? 0 : mutableData.get() + count);
               console.log(mutableData);
                document.write(mutableData)
                return mutableData;
        });
       
            }

updateUserAccountAndAll("رأس المال","دولار أمريكي",0);

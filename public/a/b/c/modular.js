
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getDatabase, ref, set ,push,onValue,get,child,runTransaction,increment,update} 
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
    import { getAuth, signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import moment from 'https://cdn.jsdelivr.net/npm/moment@2.29.4/+esm';
  

  //const company = localStorage.getItem("companyid")+"/";
   const company ="company12345/";
/*
  export const firebaseConfigx = {
  apiKey: "AIzaSyC0esGNBo2_2w4JucRans9zBZulhgTAbb0",
  authDomain: "sy-iyad.firebaseapp.com",
  databaseURL: "https://sy-iyad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sy-iyad",
  storageBucket: "sy-iyad.firebasestorage.app",
  messagingSenderId: "873740808897",
  appId: "1:873740808897:web:f1c636369a510256e41a40",
  measurementId: "G-7VLX9WHL3H"
};
*/
export const firebaseConfigx = {
apiKey: "AIzaSyA5zQZnQsZsPxGRosGIDncS47xIDz_w7cw",
  authDomain: "alix-ad710.firebaseapp.com",
  databaseURL: "https://alix-ad710.firebaseio.com",
  projectId: "alix-ad710",
  storageBucket: "alix-ad710.appspot.com",
  messagingSenderId: "341389404751",
  appId: "1:341389404751:web:f1d9ec493179747885983a"
};

export const app = initializeApp(firebaseConfigx);
const db = getDatabase(app);
  const auth = getAuth(app);
  //const companyx = "ySDqBLEsP4fEorxCVlXfdeMzqs53/";

  var companyx=localStorage.getItem("userId");

export const databaseReference = ref(db,companyx);
export const databaseReferencex = ref(db,companyx);
console.log(companyx);
  let senderx = document.getElementById("output");
  let receiverx = document.getElementById("input");
  let cursenderx = document.getElementById("currencyfrom");
  let curreceiverx = document.getElementById("currencyto");
  var countsenderx = document.getElementById("accfrom");
  var countreceiverx = document.getElementById("accto");
 var profitsenderx = document.getElementById("taxfrom");
  var profitreceiverx = document.getElementById("taxto");
  var customerx = document.getElementById("benif");
  var printSelect = document.getElementById("select4");
  var printcurrency = document.getElementById("currency");

export function loadusers(selectItem){

get(child(databaseReferencex,"users")).then((snapshotx)=>{


  snapshotx.forEach((childSnapshot)=>{

    var userinfo = childSnapshot.val();
    var username = childSnapshot.key;
     
        var senderoption = document.createElement("option");
        //var receiveroption = document.createElement("option");
        //  
        senderoption.style.cursor = "none !important";
        senderoption.text = username;
        senderoption.textContent = username;
        senderoption.value = userinfo.uid;
       // receiveroption.style.cursor = "none !important";
       // receiveroption.text = username;
       // receiveroption.textContent = username;
      //  receiveroption.value = userinfo.uid;
        selectItem.appendChild(senderoption);
       // receiverx.appendChild(receiveroption);
        $(selectItem).trigger("chosen:updated");
       // $('#input').trigger("chosen:updated");
  });

});
}
 export const curs= new Map();
export var cursrate = [];

export async function loadCurrencyLocal(){

  var x=0;

  await get(child(databaseReferencex,"currencies")).then((snapshotx)=>{
    

    snapshotx.forEach((childSnapshot)=>{
      var currencyinfo = childSnapshot.val();
      var currencyname = childSnapshot.key; 
      var currencyCode = currencyinfo.code;

          curs.set(currencyname,currencyinfo);
          localStorage.setItem(x,currencyinfo);
          cursrate[currencyCode]=currencyinfo;
       
  });
  x++;
});
return curs;

}

export async function loadCurrencies(selectItem){


 
  await get(child(databaseReferencex,"currencies")).then((snapshotx)=>{
    

    var x = 0;
    snapshotx.forEach((childSnapshot)=>{
      var currencyinfo = childSnapshot.val();
      var currencyname = childSnapshot.key; 
      var currencyCode = currencyinfo.code;

        var currencyfromoption = document.createElement("option");
        //var currencytooption = document.createElement("option");
        //  
       // currencytooption.style.cursor = "none !important";

        currencyfromoption.style.cursor = "none !important";
        currencyfromoption.text = currencyname;
        currencyfromoption.textContent = currencyname;
        currencyfromoption.value = currencyinfo.code;
        selectItem.appendChild(currencyfromoption);
        //currencytooption.text = currencyname;
       // currencytooption.textContent = currencyname;
       // currencytooption.value = currencyinfo.code;
       // curreceiverx.appendChild(currencytooption);
        $(selectItem).trigger("chosen:updated");
        //$('#currencyfrom').trigger("chosen:updated");
       // if(currencyCode === "USD"){
          curs.set(currencyname,currencyinfo);
          //localStorage.setItem(x,currencyinfo);
          cursrate[currencyCode]=currencyinfo;
       // }
       
        
  });
  x++;
 
  //return snapshotx;
  //curs.push(snapshotx);
 
});


//return Promise.resolve(curs);
return curs;
}
 export function logg(){
 
console.error(curs.get("دولار أمريكي").rate);
}
export function ss(){
  alert("ss");
}
export async function loadUserCurs(user) {


    await get(child(databaseReferencex,'currencies')).then((snapshotx)=>{
    
      snapshotx.forEach(item =>{

       get(child(databaseReferencex,'users/'+user+'/account/'+item.key)).then((snapshotxm)=>{
  

      var t= document.getElementById(item.val().code);
      if(snapshotxm.val()){

      t.innerText=snapshotxm.val().count;
      }else{
        t.innerText="0";
      }
      });
 
});
});
}

export async function Headers(){
 await get(child(databaseReferencex,'currencies')).then((snapshotx)=>{
    
      snapshotx.forEach(item =>{

       get(child(databaseReferencex,'users/'+user+'/account/'+item.key)).then((snapshotxm)=>{
  

      var t= document.getElementById(item.val().code);
      if(snapshotxm.val()){

      t.innerText=snapshotxm.val().count;
      }else{
        t.innerText="0";
      }
      });
 
});
});
}

export function toggleStar() {

     let sender = senderx[senderx.selectedIndex].text;
  let receiver = receiverx[receiverx.selectedIndex].text;
  let cursender = cursenderx[cursenderx.selectedIndex].text;
  let curreceiver = curreceiverx[curreceiverx.selectedIndex].text;
  var countsender = Number(countsenderx.value);
  var countreceiver = Number(countreceiverx.value);
 var profitsender = Number(profitsenderx.value);
  var profitreceiver = Number(profitreceiverx.value);
  var customer = customerx.value;
  var key =  Date.now().toString();
  var date = moment().format('DD-MM-YYYY');

    const updates = {};


            document.forms["frm"]["save"].disabled = true;
                                       
                                    
                          
      var cutcentersender = " مركز قطع "+cursender;
      var cutcenterreceiver = " مركز قطع "+curreceiver;

      const dollar = "دولار أمريكي";
      const frog = "فروق صرف إيجابية";
       var qued = "قيود محققة";
   
      const sendertrans = {
         checked: false,
            count: Number(countsender),
            customer: customer,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: profitreceiver,
            sender: sender,
            sprofit: profitsender,
            sumAll: Number(countsender+profitsender)
      }
     
      const receivertrans = {
         checked: false,
            count: Number(countreceiver),
            customer: customer,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: profitreceiver,
            sender: sender,
            sprofit: profitsender,
            sumAll: -Number(countreceiver+profitreceiver)
      }

      const qued1trans = {
         checked: false,
            count: Number(profitsender),
            customer: customer,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: qued,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll: -Number(profitsender)
      }

      const qued2trans = {
         checked: false,
            count: Number(profitreceiver),
            customer: customer,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: qued,
            sprofit: 0,
            sumAll: Number(profitreceiver)
      }

      // if cur2 == dollar

      const cutcentersendertrans1 = {
         checked: false,
            count: Number(countsender),
            customer: customer,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: cutcentersender,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll: -Number(countsender)
      }

      const cutcentersendertrans2 = {
         checked: false,
            count: Number(countreceiver),
            customer: customer,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number(countreceiver)
      }

      const cutcenterreceivertrans1 = {
         checked: false,
            count:  Number(countreceiver/curs.get(curreceiver).rate),
            customer: customer,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll: -Number(countreceiver/curs.get(curreceiver).rate)
      }

      const cutcenterreceivertrans2 = {
         checked: false,
            count: Number(countreceiver),
            customer: customer,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number(countreceiver)
      }

      // a,b 
      // if cur1 == dollar
      const centraltrans = {
         checked: false,
            count: Number(countsender-(countreceiver/curs.get(curreceiver).rate)),
            customer: customer,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  -Number(countsender-(countreceiver/curs.get(curreceiver).rate))
      }


      const cutcenterreceivertrans3 = {
         checked: false,
            count: Number(countreceiver),
            customer: customer,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number(countreceiver)
      }
      const centraltrans1 = {
         checked: false,
            count: Number(countreceiver/curs.get(curreceiver).rate),
            customer: customer,
            date: date,
            ex: dollar,
            key: key,
            notice: "",
            reciever: cutcentersender,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll:  -Number( countreceiver/curs.get(curreceiver).rate)
      }
      const centraltrans2 = {
         checked: false,
            count: Number(countreceiver/curs.get(curreceiver).rate),
            customer: customer,
            date: date,
            ex: dollar,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number( countreceiver/curs.get(curreceiver).rate)
      }

      const cutcentersendertrans3 = {
         checked: false,
            count: Number(countsender),
            customer: customer,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  -Number( countsender)
      }

      
      
      
      if(cursender!=curreceiver && cursender!=dollar && curreceiver!=dollar){


         updates[sender+"/accounts/"+key] = sendertrans;
        updates[receiver+"/accounts/"+key] = receivertrans;
        
        updates[cutcentersender+"/accounts/"+key] = centraltrans1;
        updates[cutcentersender+"/accounts/"+Date.now().toString()] = cutcentersendertrans3;

        updates[cutcenterreceiver+"/accounts/"+key] = centraltrans2;
        updates[cutcenterreceiver+"/accounts/"+Date.now().toString()] = cutcenterreceivertrans3;
        
        updates[ sender+"/account/"+cursender+"/count"] = increment(Number(countsender+profitsender));
        updates[receiver+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver+profitreceiver));

        updates[cutcentersender+"/account/"+dollar+"/count"] = increment(-Number((countreceiver+profitreceiver)/curs.get(curreceiver).rate));
        updates[cutcentersender+"/account/"+cursender+"/count"] = increment(Number(countsender+profitsender));
        
        updates[cutcenterreceiver+"/account/"+dollar+"/count"] = increment(Number((countreceiver+profitreceiver)/curs.get(curreceiver).rate));
        updates[cutcenterreceiver+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver+profitreceiver));
        

        update(child(databaseReference,"users"), updates);

         document.forms["frm"]["save"].disabled = false;
                                        swal("تم انشاء القيد بنجاح","شكرا لك يا اياد "+"🌹🌹🌹🌹", {
                                            button: false,
                                            closeOnClickOutside: false,
                                            icon: "success",
                                            timer: 3000
                                        });

      }

      if(cursender==curreceiver){
       
        updates[sender+"/accounts/"+key] = sendertrans;
        updates[receiver+"/accounts/"+key] = receivertrans;
        
        updates[sender+"/account/"+cursender+"/count"] = increment(Number(countsender+profitsender));
        updates[receiver+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver+profitreceiver));

          updates[qued+"/account/"+cursender+"/count"]=increment(-Number(profitsender-profitreceiver));
        
        if(profitsender!=0 ){
          
          updates[qued+"/accounts/"+key] = qued1trans;
        
        }
        if(profitreceiver!=0){

          updates[qued+"/accounts/"+Date.now().toString()] = qued2trans;
      
        }

        update(child(databaseReference,"users"), updates);

         document.forms["frm"]["save"].disabled = false;
                                        swal("تم انشاء القيد بنجاح","شكرا لك يا اياد "+"🌹🌹🌹🌹", {
                                            button: false,
                                            closeOnClickOutside: false,
                                            icon: "success",
                                            timer: 3000
                                        });
        }else{
          if(cursender==dollar){

        updates[sender+"/accounts/"+key] = sendertrans;
        updates[receiver+"/accounts/"+key] = receivertrans;
        
        updates[cutcenterreceiver+"/accounts/"+key] = cutcenterreceivertrans1;
        updates[cutcenterreceiver+"/accounts/"+Date.now().toString()] = cutcenterreceivertrans2;
        
        updates[frog+"/accounts/"+key] = centraltrans;

        updates[sender+"/account/"+cursender+"/count"] = increment(Number(countsender+profitsender));
        updates[receiver+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver+profitreceiver));
        
        updates[cutcenterreceiver+"/account/"+cursender+"/count"] = increment(-Number((countreceiver+profitreceiver)/curs.get(curreceiver).rate));
        updates[cutcenterreceiver+"/account/"+curreceiver+"/count"] = increment(Number(countreceiver+profitreceiver));
        
        updates[frog+"/account/"+cursender+"/count"] = increment(-Number((countsender+profitsender)-((countreceiver+profitreceiver)/curs.get(curreceiver).rate)));

        update(child(databaseReference,"users"), updates);

         document.forms["frm"]["save"].disabled = false;
                                        swal("تم انشاء القيد بنجاح","شكرا لك يا اياد "+"🌹🌹🌹🌹", {
                                            button: false,
                                            closeOnClickOutside: false,
                                            icon: "success",
                                            timer: 3000
                                        });

          }
          if(curreceiver==dollar){

        updates[sender+"/accounts/"+key] = sendertrans;
        updates[receiver+"/accounts/"+key] = receivertrans;
        updates[cutcentersender+"/accounts/"+key] = cutcentersendertrans1;
        updates[cutcentersender+"/accounts/"+Date.now().toString()] = cutcentersendertrans2;
       
        updates[sender+"/account/"+cursender+"/count"] = increment(Number(countsender+profitsender));
        updates[receiver+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver+profitreceiver));
         updates[cutcentersender+"/account/"+cursender+"/count"] = increment(-Number(countsender+profitsender));
        updates[cutcentersender+"/account/"+curreceiver+"/count"] = increment(Number(countreceiver+profitreceiver));

        update(child(databaseReference,"users"), updates);

         document.forms["frm"]["save"].disabled = false;
                                        swal("تم انشاء القيد بنجاح","شكرا لك يا اياد "+"🌹🌹🌹🌹", {
                                            button: false,
                                            closeOnClickOutside: false,
                                            icon: "success",
                                            timer: 3000
                                        });
          }

        }
    
  document.getElementById("frm").reset();    

  senderx.selectedIndex=0;
  receiverx.selectedIndex=0;
  cursenderx.selectedIndex=0;
  curreceiverx.selectedIndex=0;
  $('#output').trigger("chosen:updated");
  $('#input').trigger("chosen:updated");
  $('#currencyfrom').trigger("chosen:updated");
  $('#currencyto').trigger("chosen:updated");
  

    }



    export async function cutter(){


  let cursender = cursenderx[cursenderx.selectedIndex].text;
  let curreceiver = curreceiverx[curreceiverx.selectedIndex].text;
  var countsender = Number(countsenderx.value);
  var countreceiver = Number(countreceiverx.value);
  var key =  Date.now().toString();
  var date = moment().format('DD-MM-YYYY');

    const updates = {};


      var user = printSelect[printSelect.selectedIndex].text;
      var cutprice = document.getElementById("cut").value;
      var sender = user;
      var receiver = user;
       var cutcentersender = "مركز قطع "+cursender;
      var cutcenterreceiver = " مركز قطع "+curreceiver;

      const dollar = "دولار أمريكي";
      const frog = "فروق صرف إيجابية";
       var qued = "قيود محققة";
   
      const sendertrans = {
         checked: false,
            count:Number(countsender),
            customer: cutprice,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll: Number(countsender)
      }
     
      const receivertrans = {
         checked: false,
            count: Number(countreceiver),
            customer: cutprice,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll: -Number(countreceiver)
      }

      // if cur2 == dollar

      const cutcentersendertrans1 = {
         checked: false,
            count: Number(countsender),
            customer: cutprice,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: cutcentersender,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll: -Number(countsender)
      }

      const cutcentersendertrans2 = {
         checked: false,
            count: Number(countreceiver),
            customer: cutprice,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number(countreceiver)
      }

      const cutcenterreceivertrans1 = {
         checked: false,
            count:  Number(countreceiver/curs.get(curreceiver).rate),
            customer: cutprice,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll: -Number(countreceiver/curs.get(curreceiver).rate)
      }

      const cutcenterreceivertrans2 = {
         checked: false,
            count: Number(countreceiver),
            customer: cutprice,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number(countreceiver)
      }

      // a,b 
      // if cur1 == dollar
      const centraltrans = {
         checked: false,
            count: Number(countsender-(countreceiver/curs.get(curreceiver).rate)),
            customer: cutprice,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  -Number(countsender-(countreceiver/curs.get(curreceiver).rate))
      }


      const cutcenterreceivertrans3 = {
         checked: false,
            count: Number(countreceiver),
            customer: cutprice,
            date: date,
            ex: curreceiver,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number(countreceiver)
      }
      const centraltrans1 = {
         checked: false,
            count: Number(countreceiver/curs.get(curreceiver).rate),
            customer: cutprice,
            date: date,
            ex: dollar,
            key: key,
            notice: "",
            reciever: cutcentersender,
            rprofit: 0,
            sender: sender,
            sprofit: 0,
            sumAll:  -Number( countreceiver/curs.get(curreceiver).rate)
      }
      const centraltrans2 = {
         checked: false,
            count: Number(countreceiver/curs.get(curreceiver).rate),
            customer: cutprice,
            date: date,
            ex: dollar,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  Number( countreceiver/curs.get(curreceiver).rate)
      }

      const cutcentersendertrans3 = {
         checked: false,
            count: Number(countsender),
            customer: cutprice,
            date: date,
            ex: cursender,
            key: key,
            notice: "",
            reciever: receiver,
            rprofit: 0,
            sender: cutcenterreceiver,
            sprofit: 0,
            sumAll:  -Number( countsender)
      }

      
      
      
      if(cursender!=curreceiver && cursender!=dollar && curreceiver!=dollar){


         updates[user+"/accounts/"+key] = sendertrans;
        updates[user+"/accounts/"+Date.now().toString()] = receivertrans;
        
        updates[cutcentersender+"/accounts/"+key] = centraltrans1;
        updates[cutcentersender+"/accounts/"+Date.now().toString()] = cutcentersendertrans3;

        updates[cutcenterreceiver+"/accounts/"+key] = centraltrans2;
        updates[cutcenterreceiver+"/accounts/"+Date.now().toString()] = cutcenterreceivertrans3;
        
        updates[ user+"/account/"+cursender+"/count"] = increment(Number(countsender));
        updates[user+"/account/"+receiver+"/count"] = increment(-Number(countreceiver));

        updates[cutcentersender+"/account/"+dollar+"/count"] = increment(-Number((countreceiver)/curs.get(curreceiver).rate));
        updates[cutcentersender+"/account/"+cursender+"/count"] = increment(Number(countsender));
        
        updates[cutcenterreceiver+"/account/"+dollar+"/count"] = increment(Number((countreceiver)/curs.get(curreceiver).rate));
        updates[cutcenterreceiver+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver));
        

        update(child(databaseReference,"users"), updates);


                                      }else{
          if(cursender==dollar){

        updates[user+"/accounts/"+key] = sendertrans;
        updates[user+"/accounts/"+Date.now().toString()] = receivertrans;
        
        updates[cutcenterreceiver+"/accounts/"+key] = cutcenterreceivertrans1;
        updates[cutcenterreceiver+"/accounts/"+Date.now().toString()] = cutcenterreceivertrans2;
        
        updates[frog+"/accounts/"+key] = centraltrans;

        updates[user+"/account/"+cursender+"/count"] = increment(Number(countsender));
        updates[user+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver));
        
        updates[cutcenterreceiver+"/account/"+cursender+"/count"] = increment(-Number((countreceiver)/curs.get(curreceiver).rate));
        updates[cutcenterreceiver+"/account/"+curreceiver+"/count"] = increment(Number(countreceiver));
        
        updates[frog+"/account/"+cursender+"/count"] = increment(-Number((countsender)-((countreceiver)/curs.get(curreceiver).rate)));

        update(child(databaseReference,"users"), updates);

         document.forms["frmx"]["savex"].disabled = false;
                                        swal("تم انشاء القيد بنجاح","شكرا لك يا اياد "+"🌹🌹🌹🌹", {
                                            button: false,
                                            closeOnClickOutside: false,
                                            icon: "success",
                                            timer: 3000
                                        });

          }
          if(curreceiver==dollar){

        updates[user+"/accounts/"+key] = sendertrans;
        updates[user+"/accounts/"+Date.now().toString()] = receivertrans;
        
        updates[cutcentersender+"/accounts/"+key] = cutcentersendertrans1;
        updates[cutcentersender+"/accounts/"+Date.now().toString()] = cutcentersendertrans2;
       
        updates[user+"/account/"+cursender+"/count"] = increment(Number(countsender));
        updates[user+"/account/"+curreceiver+"/count"] = increment(-Number(countreceiver));
         updates[cutcentersender+"/account/"+cursender+"/count"] = increment(-Number(countsender));
        updates[cutcentersender+"/account/"+curreceiver+"/count"] = increment(Number(countreceiver));

        update(child(databaseReference,"users"), updates);

       
          }

        }
    
  document.getElementById("frm").reset();    

  document.getElementById("select4"),selectedIndex=0;
  cursenderx.selectedIndex=0;
  curreceiverx.selectedIndex=0;
  $('#select4').trigger("chosen:updated");
  $('#currencyfrom').trigger("chosen:updated");
  $('#currencyto').trigger("chosen:updated");
  
    }

    async function doprint(table){

      var userx = document.getElementById("select4");
      var currencyx = document.getElementById("currency");
      var labelx = document.getElementById("labelx");
      var user = userx[userx.selectedIndex].text;
      for(var i = document.getElementById("example").rows.length; i > 3;i--)
 {
   document.getElementById("example").deleteRow(i -1);
  }
      //document.getElementById("example").delete_all_rows();
      //var x=0;
      await get(child(databaseReference,"users/"+user+"/accounts/")).then((dates)=>{
 
        
        console.log(dates.val()+user+dates);
       // dates.forEach((keys)=>{
          
       //   var x=1;
         dates.forEach((progx)=>{
			 var x=1;
           var prog = progx.val();
           var from = document.getElementById("date2").value;
            var to = document.getElementById("date3").value;

            var between1 = Date.parse(from);

            var between2 = Date.parse(to);
          
          if(prog.ex==currencyx[currencyx.selectedIndex].text){
            if(prog.key >= between1-3600000 && prog.key <= between2+3600000){
          var trx = document.createElement("tr");
          trx.className="even";
            
           
            var date =  new Date(Number(prog.key)).toISOString();//,"dd-MM-yyyy");
            var tdid = document.createElement("td");
            var tddate = document.createElement("td");
            var tdtype = document.createElement("td");
            var tdkey = document.createElement("td");
            var tduser = document.createElement("td");
            var tdcustomer = document.createElement("td");
             var tdforus = document.createElement("td");
            var tdonus = document.createElement("td");
            var tdtotal = document.createElement("td");
            var tdcheck = document.createElement("td");
            tdid.className = "sorting_1";
             tddate.className = "btnedit";
              tdkey.className = "no-print";
               tdforus.style.color = "blue";
                tdcustomer.style.width = "60%";
                 tdonus.style.color = "red";
                 tdcheck.className="no-print";

             tdid.innerText= x.toString();
              tddate.innerText=date;
              tdtype.innerText="rc"
               tdkey.innerText=prog.key;
                tduser.innerText=prog.reciever;
                 tdcustomer.innerText=prog.customer;
                 var sumAll = prog.sumAll;
                 if(Number(sumAll>=0)){
                  tdforus.innerText=sumAll;
                  tdonus.innerText="";
                 }else{
                   tdforus.innerText="";
                  tdonus.innerText=sumAll;

                 }
                 tdtotal.innerText="";
                 var inpu = document.createElement("input");
                 inpu.setAttribute("type","checkbox");
                 if(prog.isChecked){
                  inpu.isChecked;
                 }
                 tdcheck.appendChild(inpu);
                  
           
           
                 trx.appendChild(tdid);
               trx.appendChild(tddate);
               trx.appendChild(tdtype);
                trx.appendChild(tdkey);
                trx.appendChild(tduser);
                 trx.appendChild(tdcustomer);
                trx.appendChild(tdforus);
                trx.appendChild(tdonus);
                trx.appendChild(tdtotal);
                trx.appendChild(tdcheck);
                table.appendChild(trx);
                console.log(x++);
                console.log(between1);
               
             //   x++;
                }
              }
       //   });

          x++;
          //table.appendChild(trx);
        
        });
      });

      labelx.textContent=userx[userx.selectedIndex].text;
      loadUserCurs(user,currencyx[currencyx.selectedIndex].text);

    }


      function function1(xx=0){

      
         $('#currencyfrom').on('change', function(){

           document.getElementById("currencyto").disabled =false;
         });
  
        console.log("started");
         if(xx==1) {document.getElementById("currencyto").value=document.getElementById("currencyfrom").value;
         
        document.getElementById("cut").value=1;
        document.getElementById("op").value="*";
        } else{
        if(false){}
         else if (document.getElementById("currencyfrom").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
    else if (document.getElementById("currencyto").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="*";document.getElementById("accto").value = (document.getElementById("accfrom").value * cursrate[document.getElementById("currencyfrom").value].rate) ;   
    }  
    else {
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate/cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
        
  
  }
    function2();
    }

    if(senderx){

loadusers(senderx);
    }
    if(receiverx){

loadusers(receiverx);
    }

if(printSelect){
loadusers(printSelect);
}
if(cursenderx){

loadCurrencies(cursenderx);
}
if(curreceiverx){

loadCurrencies(curreceiverx);
}
if(printcurrency){
loadCurrencies(printcurrency);
}

//localStorage.setItem("011",cursrates);
var cc = document.getElementById("save");
if(cc){

cc.addEventListener('click',toggleStar);
}

var frma = document.querySelector('#frma');
if(frma){

frma.addEventListener('submit', function(e) {
      var form = this;
      
      e.preventDefault();
     
	  
     if (document.forms["frma"]["select4"].selectedIndex == 0) {
       swal("خطأ", "الرجاء اختيار   العميل"+" انتبه    ", "warning");

		
        return false;
    }

    if (document.forms["frma"]["currency"].selectItem === null) {
       swal("خطأ", "الرجاء اختيار  العملة"+" انتبه    ", "warning");

		
        return false;
    }

    doprint(document.getElementById("tbodyx"));
    //alert("jj");
    
    
  });
}

export function alexu(){

  document.getElementById("currencyto").disabled =false;
            $('#currencyto option').prop('disabled', false);
  var xx=0;
  console.log("started");
         if(xx==1) {document.getElementById("currencyto").value=document.getElementById("currencyfrom").value;
         
        document.getElementById("cut").value=1;
        document.getElementById("op").value="*";
        } else{
        if(false){}
         else if (document.getElementById("currencyfrom").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
    else if (document.getElementById("currencyto").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="*";document.getElementById("accto").value = (document.getElementById("accfrom").value * cursrate[document.getElementById("currencyfrom").value].rate) ;   
    }  
    else {
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate/cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
        
  
  }
}
if(curreceiverx){
curreceiverx.addEventListener("change", function(){
var xx=0;
  console.log("started");
         if(xx==1) {document.getElementById("currencyto").value=document.getElementById("currencyfrom").value;
         
        document.getElementById("cut").value=1;
        document.getElementById("op").value="*";
        } else{
        if(false){}
         else if (document.getElementById("currencyfrom").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
    else if (document.getElementById("currencyto").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="*";document.getElementById("accto").value = (document.getElementById("accfrom").value * cursrate[document.getElementById("currencyfrom").value].rate) ;   
    }  
    else {
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate/cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
        
  
  }
   // function2();

});

}
if(cursenderx){
cursenderx.addEventListener("change", function(){
  console.log("froma");
  
var xx=1;
  console.log("started");
         if(xx==1) {document.getElementById("currencyto").value=document.getElementById("currencyfrom").value;
         
        document.getElementById("cut").value=1;
        document.getElementById("op").value="*";
        } else{
        if(false){}
         else if (document.getElementById("currencyfrom").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
    else if (document.getElementById("currencyto").value == "USD"){
      document.getElementById("cut").value=cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="*";document.getElementById("accto").value = (document.getElementById("accfrom").value * cursrate[document.getElementById("currencyfrom").value].rate) ;   
    }  
    else {
      document.getElementById("cut").value=cursrate[document.getElementById("currencyto").value].rate/cursrate[document.getElementById("currencyfrom").value].rate;
       //document.getElementById("cut").value=42.951;
      document.getElementById("op").value="/";document.getElementById("accto").value = (document.getElementById("accfrom").value / cursrate[document.getElementById("currencyto").value].rate) ;   
    }  
        
  
  }

   // function2();
   

});
}

var logo = document.getElementById("logout");
if(logo){

logo.addEventListener("click",function(){

  signOut(auth).then(() => {
    window.location.href="../../../index.html"
  // Sign-out successful.
}).catch((error) => {
 console.error(error.toString());
});
});
}

 







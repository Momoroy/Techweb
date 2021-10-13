

function insertData(){
    var u= document.getElementById("user").value;  
    var m= document.getElementById("mail").value;
    var p= document.getElementById("pass").value;
   // console.log(u);
    // console.log(m);
     //console.log(p);
}

function insertMore(){
  var n= document.getElementById("nam").value;
  var c= document.getElementById("cognam").value;
  var a= document.getElementById("address").value;
  var g= document.getElementById("gender").value;
  // console.log(n);    
  // console.log(c);
  // console.log(a);
  // console.log(g);
}

var MongoClient = require('mongodb').MongoClient;   //crea collegamento tra javascript e mongodb
var url = "mongodb://localhost:27017/";             // connette con il database sulla macchina locale, quindi se usi questo url puoi aggiungere cose solo sul tuo computer

MongoClient.connect(url, function(err, db) {         //funzione per aggiungere dati sul db
  if (err) throw err;
  var dbo = db.db("project");                           //nome del database che usiamo (quello tra parentesi, cioè il project)
  var myobj = { username: u, mail: m, password: p };    //lista di valori da inserire, prima dei due punti è il nome del campo, dopo il valore
  dbo.collection("customers").insertOne(myobj, function(err, res) {          //scegliamo la collezzione a cui aggiungere, poi usiamo insertone che serve per inserire un valore singolo
    if (err) throw err;
    console.log("1 document inserted");                           
    db.close();       
  });
});

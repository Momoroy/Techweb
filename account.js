

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

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { username: u, mail: m, password: p };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
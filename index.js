var mysql = require('mysql');
const express = require("express")
var app = express();
const bodyparser=require("body-parser");  
app.use(bodyparser.json());

var con = mysql.createConnection({  
  host: "localhost",  
  user: "root", 
  password: "password" ,
  database:"employeedb" 

});  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(2000,()=>{
console.log("2000 is running")
});

app.get("/employees",(req,res)=>{
con.query("delete   from emp where naam='amit'",(err,rows,fields)=>{
  if(err) throw err
  res.send(rows);
  console.log(rows);
  
  
})

})

app.get("/employees/ame",(req,res)=>{
  con.query("update  emp set naam='kamlesh yadav' where empid=2",(err,rows,fields)=>{
    if(err) throw err
    res.send(rows);
    console.log(rows);
    
    
  })
  
  })
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("INSERT INTO new (name, id) VALUES ('Company Inc', 1),('Company', 2)", function (err, result) {
    if (err) throw err;
    console.log("record created");
  });
});
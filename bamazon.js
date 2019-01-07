var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost1",
    port:3306,
    user:"root",
    password:"password",
    database:"bamazon"
})

connection.connect(function(err){
    if(err);
    console.log("connection successful!")
})
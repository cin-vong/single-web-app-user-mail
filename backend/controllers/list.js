const dbParams = require('../database/dbParams');
const mysql = require('mysql'); 

const con = mysql.createConnection(dbParams);

exports.GetoneList = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
           con.query("SELECT * FROM customers", function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             });
        });
    }


exports.GetallList = (req, res, next) => {
         con.connect(function(err) {
             if (err) throw err;
                con.query("SELECT * FROM customers", function (err, result, fields) {
              if (err) throw err;
                  console.log(result);
                  return res.status(201).json({ result })
                  });
             });
         }

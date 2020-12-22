const mysql = require('mysql');
const dbParams = require('../database/dbParams');


exports.signUp = (req, res, next) => {
    const pool = mysql.createPool(dbParams);
    pool.getConnection(function (err, con){
        if (err) throw err;
        console.log("Connected!");

        let user = {
            name: req.body.name,
            adress: req.body.address
        }

        con.query('SELECT adress FROM customers WHERE adress = ?' , user.adress, function (err, result){
            if  (err) throw err;

            console.log(result.lenght);

            if (result.lenght > 0){
                console.log(' Présent');
                res.status(500).json({
                    message: 'Existe déjà!'
                });

          } else {

            const sql = "INSERT INTO customers SET ?";

            con.query(sql, user, function (err, result){
                if (err) throw err;
                console.log("Nb d'ajout =" + result.affectedRows);
                res.status(201).json({
                    message: 'Objet crée !'
                     });
                });
            };
        })
    });
};
const mysql = require('mysql');

module.exports = (paramsDb, queryParams) => {
    const connection = mysql.createConnection(paramsDb);
    connection.connect(err => {
        console.log('Connecté à la BD');

        connection.query(queryParams, (err, result)=>{
            if (err) throw err;
            console.log("En marche !");
        });
    })
};
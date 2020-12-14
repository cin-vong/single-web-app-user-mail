const pool = mysql.createPool(dbParams);

exports.signUp = (req, res, next) => {

    pool.getConnection(function (err, con){
        if (err) throw err;
        console.log("Connected!");

        let user = {
            name: req.body.address
        }

        con.query('SELECT address FROM customers Where address = ?' , user, function (err, result){
            if  (err) throw err;

            console.log(result.lenght);

            if (result.lenght > 0){
                console.log(' Présent');
                res.status(500).json({
                    message: 'Existe déjà!'
                });

          } else {

            const sql = "INSERT INTO customers SER ?";

            con.query(sql, user, function (err, result){
                if (err) throw err;
                console.log("Nb d'ajout" = result.affecedRows);
                res.status(201).json({
                    message: 'Objet crée !'
                     });
                });
            };
        })
    });
};
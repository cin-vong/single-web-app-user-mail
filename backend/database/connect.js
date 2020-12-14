const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'databasename'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });
  
  app.get("/",(req,res) => {
      connection.query('SELECT * from databasename LIMIT 1', (err, rows) => {
          if(err) throw err;
          console.log('The data from databasename table are: \n', rows);
          connection.end();
      });
  });
  
  app.listen(3000, () => {
      console.log('Server is running at port 3000');
  });
  

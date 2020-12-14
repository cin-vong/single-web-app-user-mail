const express = require("express");
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser');

const connection = require('./database/connexion');


const contactRoutes = require('./routes/contact');
const dbParams = require('./database/dbParams');

//Connexion DB

const sql = "CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), adress VARCHAR (255))";
connection(dbParams, sql);

// Set headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/auth', contactRoutes);

module.exports = app;
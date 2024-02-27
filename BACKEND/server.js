const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const server = express();

// configuració
server.use(cors());
server.use(express.json());

// rutes
server.post("/introduir", (req, res) => {
    const email = req.body.email;
    const conexion = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "Exercici_omplenar_form_retornar_ok"
    });

    conexion.connect(err => {
        if (err) {
          res.json('Error a la conexió MySQL: ' + err);
        } else {
          const query = "insert into usuarios values (default, '" + email + "');";
          conexion.query(query, err => {
            if (err) {
              res.json('Error a l\'inserció del correu electrònic: ' + err);
            } else {
              res.json('Correu electrònic introduït correctament');
            }
          });
        }
      });
    });
    
// arrancar servidor
server.listen(3003, () => {
    console.log("Servidor OK!!!");
  });











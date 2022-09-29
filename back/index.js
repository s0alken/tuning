import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tuning'
});

db.connect();


app.get('/clientes', function (req, res) {

    const query = `SELECT * FROM cliente`;

    db.query(query, function (error, results) {
        if (error) throw error;

        res.json(results);
    })
})

app.get('/clientes/crear', function (req, res) {

    const query = `INSERT INTO cliente SET ?`;

    db.query(query, req.query, function (error, results) {
        if (error) throw error;

        res.json({ creado: true });
    })
})

app.get('/pisos/:id', function (req, res) {

    const query = `SELECT * FROM piso WHERE id = ?`;

    db.query(query, req.params.id, function (error, results) {
        if (error) throw error;

        res.json(results);
    })
})

app.get('/pisos/editar/:id', function (req, res) {

    const query = `UPDATE piso SET ? WHERE id = ?`;

    db.query(query, [req.query, req.params.id], function (error, results) {
        if (error) throw error;

        res.json({ editado: true });
    })
})

app.get('/pisos/eliminar/:id', function (req, res) {

    const query = `DELETE FROM piso WHERE id = ?`;

    db.query(query, req.params.id, function (error, results) {
        if (error) throw error;

        res.json({ eliminado: true });
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mysql = require('mysql2')

const app = express()

// MIDDLWEARES

app.use(express.json());
app.use(cors({ origin: "*" }));
dotenv.config();

// CONNECTION TO DATABASE

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
});

connection.connect((error) => {
    if (error) {
        console.error('Error al conectar con la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// GET QUESTIONS AND ANSWERS

app.get("/questions/:categoria", (req, res) => {
    const { categoria } = req.params

    const query = 'SELECT * FROM preguntas WHERE categoria = ?'
    const values = [categoria]

    connection.query(query, values, (error, results) => {
        if (error) {
            res.status(500).json({ error: "Error al consultar la base de datos"})
        }

        if (results.length === 0) {
            res.status(400).json({ error: "No se encontró la categoría"})
        } else {
            res.status(200).json({ message: "Categoría encontrada", questions: results })
        }
    })
})

app.listen(3000, () => {
    console.log('El servidor está corriendo por el puerto 3000')
})
const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userDB'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});

const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// MySQL connection setup
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

// Middleware
app.use(cors());
app.use(express.json());

// POST: Register user (duplicates allowed)
app.post('/register', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    // Optional: Log duplicate email (does not block it)
    const checkSql = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
    db.query(checkSql, [email], (err, results) => {
        if (err) {
            console.error('Error checking duplicates:', err);
        } else if (results[0].count > 0) {
            console.log(`Note: Duplicate email detected - ${email}`);
        }

        // Still insert the new user
        const insertSql = 'INSERT INTO users (name, email) VALUES (?, ?)';
        db.query(insertSql, [name, email], (err, result) => {
    if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'This email is already registered.' });
        }
        console.error('Error inserting data:', err);
        return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({
        message: 'User registered successfully',
        userId: result.insertId
    });
});

    });
});

// GET: Retrieve all users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results);
    });
});

// Start server
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});

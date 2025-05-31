const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

require('dotenv').config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'http://localhost:3000',  // local dev frontend
    'https://answerkey-1.onrender.com',  // your deployed frontend static site URL
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);  // allow non-browser clients (like Postman)
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());

// POST /register
app.post('/register', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        const usersRef = db.collection('users');
        const snapshot = await usersRef.where('email', '==', email).get();

        if (!snapshot.empty) {
            console.warn(`Attempted duplicate registration for email: ${email}`);
            return res.status(409).json({ message: 'This email is already registered.' });
        }

        const docRef = await usersRef.add({
            name,
            email,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        res.status(201).json({
            message: 'User registered successfully',
            userId: docRef.id
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Database error occurred during registration.' });
    }
});

// GET /users
app.get('/users', async (req, res) => {
    try {
        const usersRef = db.collection('users');
        const snapshot = await usersRef.get();

        const users = [];
        snapshot.forEach(doc => {
            users.push({
                id: doc.id,
                ...doc.data()
            });
        });

        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Database error occurred while fetching users.' });
    }
});

// Remove static file serving because frontend is deployed separately

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

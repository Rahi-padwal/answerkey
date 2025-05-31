const express = require('express');
const cors = require('cors');
const path = require('path');
const { db } = require('./firebase-config');
const admin = require('firebase-admin');

const app = express();
// Use process.env.PORT provided by the hosting platform, or default to 5000 for local development
const PORT = process.env.PORT || 5000;

// Middleware
// Configure CORS to allow requests only from your frontend's domain (more secure)
const allowedOrigins = [
    'http://localhost:3000', // Allow your local React development server
    // **IMPORTANT:** Add your deployed frontend URL(s) here!
    // Example for Vercel/Netlify: 'https://your-frontend-app-name.vercel.app',
    // Example if your backend also hosts frontend: 'https://your-backend-app-name.railway.app'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, or same-origin requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true // Important if you use cookies or sessions (like with Passport.js)
}));

app.use(express.json()); // For parsing application/json bodies from frontend

// POST: Register user
app.post('/register', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        // Check if user already exists
        const usersRef = db.collection('users');
        const snapshot = await usersRef.where('email', '==', email).get();
        
        if (!snapshot.empty) {
            console.warn(`Attempted duplicate registration for email: ${email}`);
            return res.status(409).json({ message: 'This email is already registered.' });
        }

        // Add new user
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

// GET: Retrieve all users
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

// --- Serve React Frontend Static Files in Production ---
// This block ensures your Node.js server also serves your React app when deployed.
// It assumes your React app is in a subfolder like 'client'
// and its build output (from 'npm run build') is in 'client/build'.
if (process.env.NODE_ENV === 'production') {
    // Serve any static files (like your React build)
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start server
// Listen on the dynamic PORT and on '0.0.0.0' to be accessible from outside the container
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    // For local development, you'd typically access it via localhost:5000 (if PORT is 5000)
    console.log(`For local access, use: http://localhost:${PORT}`);
});
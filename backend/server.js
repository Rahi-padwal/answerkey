const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const path = require('path'); // Added for serving static files

const app = express();
// Use process.env.PORT provided by the hosting platform, or default to 5000 for local development
const PORT = process.env.PORT || 5000;

// MySQL connection setup - CRITICAL: Use environment variables for deployment!
const db = mysql.createConnection({
    host: process.env.DB_HOST,         // e.g., 'roundhouse.proxy.rlwy.dev' from Railway
    user: process.env.DB_USER,         // e.g., 'root' or 'railway'
    password: process.env.DB_PASSWORD, // e.g., 'your_db_password_from_platform'
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT,    
    waitForConnections: true,          // Recommended for production
    connectionLimit: 10,               // Recommended for production
    queueLimit: 0                      // Recommended for production
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack); // Use .stack for detailed error
        // In a deployed environment, if the database fails, it's often better to exit
        // process.exit(1); // Uncomment if you want to exit the app on DB connection failure
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});

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

// --- Authentication (Passport.js) - Placeholder for your setup ---
// (You mentioned Passport.js in package.json, so this is where its setup would go.
//  This specific snippet does NOT include the actual Passport logic, just a reminder.)
// const session = require('express-session');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy; // If using Google Auth

// app.use(session({
//     secret: process.env.SESSION_SECRET || 'a_strong_secret_for_local_dev', // Use env var for secret!
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: process.env.NODE_ENV === 'production', httpOnly: true, maxAge: 24 * 60 * 60 * 1000 } // Secure in production (HTTPS)
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Passport strategies and serialize/deserialize user functions would go here
// // Example Google OAuth routes:
// // app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// // app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
// //     res.redirect('/dashboard'); // Redirect after successful login
// // });
// // Example check for authenticated user
// // app.get('/api/current_user', (req, res) => {
// //     res.send(req.user);
// // });
// // ------------------------------------------------------------------


// POST: Register user
// Assumes 'email' column in 'users' table has a UNIQUE constraint
app.post('/register', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const insertSql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(insertSql, [name, email], (err, result) => {
        if (err) {
            // Check specifically for duplicate entry error (ER_DUP_ENTRY)
            if (err.code === 'ER_DUP_ENTRY') {
                console.warn(`Attempted duplicate registration for email: ${email}`);
                return res.status(409).json({ message: 'This email is already registered.' });
            }
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Database error occurred during registration.' });
        }
        res.status(201).json({
            message: 'User registered successfully',
            userId: result.insertId
        });
    });
});

// GET: Retrieve all users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ message: 'Database error occurred while fetching users.' });
        }
        res.json(results);
    });
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
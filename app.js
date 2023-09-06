const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

// Load environment variables from .env
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
    session({
        secret: 'secret-key',
        resave: false,
        saveUninitialized: true,
    })
);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', './layouts/main_app');
app.set('views', path.join(__dirname, './views'));

// JWT secret key
const secretKey = process.env.SECRET_KEY;

// Define the root route
app.get('/', (req, res) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, secretKey, (err, decoded) => {
            if (err) {
                return res.redirect('/auth/login');
            }
            res.redirect('/app/dashboard');
        });
    } else {
        res.redirect('/auth/login');
    }
});

// Include authentication routes from the "auth" folder
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/dashboard', adminRoutes);

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
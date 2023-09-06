// Import the necessary libraries and retrieve the secret key from environment variables
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

// function to require authentication for protected routes
function requireAuthMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/auth/login');
    }
    // Verify the JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.redirect('/auth/login');
        }
        req.decoded = decoded;
        next();
    });
}

// Export the middleware function for use in protected routes
module.exports = requireAuthMiddleware;

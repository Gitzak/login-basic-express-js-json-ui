// Import necessary libraries for file uploading
const multer = require('multer');
const path = require('path');

// Configure storage settings for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/avatar'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

// Create a multer instance with the configured storage settings
const upload = multer({ storage: storage });

// Export the multer instance for use in route handlers
module.exports = upload;

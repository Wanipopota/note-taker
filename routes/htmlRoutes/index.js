// Import the path module to work with file and directory paths
const path = require('path');

// Import the Router function from Express
const router = require('express').Router();

// Define a GET route for the /notes endpoint
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html')); 
    // Send the notes.html file located in the public directory as a response
});

// Define a wildcard GET route to catch all other routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html')); 
    // Send the index.html file located in the public directory as a response
});

// Export the router module for use in other parts of the application
module.exports = router;

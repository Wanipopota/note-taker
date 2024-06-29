// Import the Router function from Express
const router = require('express').Router();
// Import the notesRoutes module
const notesRoutes = require('./noteRoutes');
// Use the notesRoutes for routing requests related to notes
router.use(notesRoutes);
// Export the router module for use in other parts of the application
module.exports = router;

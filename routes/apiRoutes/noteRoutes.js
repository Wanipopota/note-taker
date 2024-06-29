// Import the Router function from Express
const router = require("express").Router();

// Import the notes data from the database
const { notes } = require('../../db/db');

// Import the createNewNote and deleteNote functions from the noteFunctions library
const { createNewNote, deleteNote } = require('../../lib/noteFunctions');

// Define a GET route to fetch all saved notes
router.get('/notes', (req, res) => {
    let saved = notes; // Assign the current notes to a variable
    res.json(saved); // Send the saved notes as a JSON response
});

// Define a POST route to create a new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString(); // Assign a new ID to the incoming note
    let note = createNewNote(req.body, notes); // Create a new note using the createNewNote function
    res.json(note); // Send the newly created note as a JSON response
});

// Define a DELETE route to remove a note by its ID
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id); // Delete the note with the given ID using the deleteNote function
    res.json(notes); // Send the updated notes array as a JSON response
});

// Export the router module for use in other parts of the application
module.exports = router;

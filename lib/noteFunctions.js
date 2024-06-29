// Import the fs (File System) module to interact with the file system
const fs = require("fs");

// Import the path module to work with file and directory paths
const path = require("path");

// Function to create a new note and save it to the notes array and file
function createNewNote(body, notesArray) {
    const note = body; // The new note to be added
    notesArray.push(note); // Add the new note to the notes array

    // Write the updated notes array to the db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2) // Pretty-print JSON with 2-space indentation
    );
    return note; // Return the newly created note
}

// Function to delete a note by its ID from the notes array and file
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id); // Convert the ID to an integer
    notesArray.splice(deleteID, 1); // Remove the note at the specified ID
    
    for (let i = deleteID; i < notesArray.length; i++) { // Re-assign IDs to the remaining notes to maintain sequential IDs
        notesArray[i].id = i.toString();
    }
    
    fs.writeFileSync( // Write the updated notes array to the db.json file
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2) // Print JSON with 2-space indentation
    );
}

// Export the createNewNote and deleteNote functions for use in other modules
module.exports = {
    createNewNote,
    deleteNote
};

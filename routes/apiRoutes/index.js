const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { createNewNote, validateNote } = require('../../lib/notes');
const fs = require("fs");
const path = require("path");

router.get('/notes', (request, response) => {
	console.log(notes);
	response.json(notes);
});

router.post('/notes', (request, response) => {
	request.body.id = uuidv4(); 
	
	if(!validateNote(request.body)) {
		response.status(400).send('The note is not properly formatted.');
		return;
	}
	
	const note = createNewNote(request.body, notes);
	response.json(note);
});

router.delete('/notes/:id', (request, response) => {
	filteredNotes = notes.filter(note => note.id != request.params.id);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ notes: filteredNotes }, null, 2)
  );
	response.status(200).send("Note Deleted.");
});

module.exports = router;

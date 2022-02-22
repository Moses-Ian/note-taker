const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { createNewNote, validateNote } = require('../../lib/notes');

router.get('/notes', (request, response) => {
	response.json(notes);
});

router.post('/notes', (request, response) => {
	//do something
	console.log('api post request made');
	request.body.id = uuidv4(); 
	
	if(!validateNote(request.body)) {
		response.status(400).send('The note is not properly formatted.');
		return;
	}
	
	const note = createNewNote(request.body, notes);
	response.json(note);
});

module.exports = router;

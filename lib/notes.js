const fs = require("fs");
const path = require("path");
const uuid = require('uuid');

function createNewNote(note, notes) {
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

function validateNote(note) {
	console.log(note.title);
	if (!note.title || typeof note.title !== 'string')
		return false;
	if (!note.text || typeof note.text !== 'string')
		return false;
	// if (!note.id || !uuid.validate(note.id) )
		// return false;
	return true;
}

module.exports = {
	createNewNote,
	validateNote
}
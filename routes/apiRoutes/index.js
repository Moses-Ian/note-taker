const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (request, response) => {
	response.json(notes);
});

router.post('/notes', (request, response) => {
	//do something
	console.log('api post request made');
});

module.exports = router;

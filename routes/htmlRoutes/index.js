const path = require('path');
const router = require('express').Router();

router.get('/', (request, response) => {
	//do something
	console.log('html get request made');
});

router.get('/notes', (request, response) => {
	//do something
	console.log('html get notes request made');
  response.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (request, response) => {
	//do something
	console.log('html get * request made');
});

module.exports = router;

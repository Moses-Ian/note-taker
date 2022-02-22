const router = require('express').Router();

router.get('/', (request, response) => {
	//do something
	console.log('html get request made');
});

router.get('/notes', (request, response) => {
	//do something
	console.log('html get notes request made');
});

router.get('*', (request, response) => {
	//do something
	console.log('html get * request made');
});

module.exports = router;

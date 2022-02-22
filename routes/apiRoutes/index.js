const router = require('express').Router();

router.get('/notes', (request, response) => {
	//do something
	console.log('api get request made');
});

router.post('/notes', (request, response) => {
	//do something
	console.log('api post request made');
});

module.exports = router;

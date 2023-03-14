const express = require('express');
const app = express();
const consoleLog = require('./practice-middleware.js');

app.use(consoleLog);

app.get('/', (req, res, next) => {
	res.send('<h1>HELLO</h1>');
});

app.listen(3000, () => {
	console.log('server is listening on port 3000....');
});

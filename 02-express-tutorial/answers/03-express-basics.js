// const app = require('express')(); or
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('user hit the resource');
	res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5002, () => {
	console.log('server is listening on port 5002');
});

// app.get
// app.post
// app.put
// app.delete
// app.all (404)
// app.use (middleware)
// app.listen

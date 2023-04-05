const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
	res.status(200).json(products);
});

app.get('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5002, () => {
	console.log('server is listening on port: 5002...');
});


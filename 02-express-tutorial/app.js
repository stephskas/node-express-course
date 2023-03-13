const express = require('express');
const app = express();
// req => middleware => res

app.get('/', (req, res) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	res.send('Home');
});

app.get('/about', (req, res) => {
	res.send('About');
});

app.listen(5001, () => {
	console.log('Server is listening on port 5001...');
});

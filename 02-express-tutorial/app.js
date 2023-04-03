const express = require('express');
const app = express();
const router = express.Router();
const people = require('./answers/routes/people');
const auth = require('./answers/routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use('/api/people', people);
app.use('/login', auth);
app.listen(5001, () => {
	console.log('listening on port 5001');
}
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

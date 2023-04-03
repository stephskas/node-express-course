const { sentence } = require('./practice2');
const os = require('os');
const { writeFile } = require('fs');
try {
	const username = os.userInfo().username;

	if (sentence) {
		writeFile('./content/practice.txt', `${sentence}\n${username}`, (err) => {
			if (err) throw err;
			console.log('file created');
		});
	} else {
		console.log('sentence is undefined');
	}
} catch (err) {
	console.log(err);
}

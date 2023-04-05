fs = require('fs').promises;

const makeFile = async () => {
	const firstLine = 'This is the first line.';
	try {
		await fs.writeFile('./content/practice2.txt', `${firstLine}`);
		for (i = 2; i <= 10; i++) {
			await fs.writeFile('./content/practice2.txt', `\nThis is line ${i}`, {
				flag: 'a',
			});
		}
	} catch (err) {
		console.log(err);
	}
};
makeFile();

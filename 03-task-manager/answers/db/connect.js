const mongoose = require('mongoose');

const connectDB = (url) => {
	return mongoose
		.connect(url, {
			writeConcern: {
				w: 'majority',
			},
		})
		.then(() => console.log('CONNECTED TO THE DB...'))
		.catch((err) => console.log(err));
};

module.exports = connectDB;

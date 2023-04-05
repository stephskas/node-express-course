const consoleLog = (req, res, next) => {
	console.log('Best day ever.');
	next();
};

module.exports = consoleLog;

const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user === 'john') {
		req.user = { name: 'john', id: 3 };
		next();
	} else {
		res.status(401).send('Unauthorized');
	}
	console.log('authorize');
	next();
};
// test with localhost: 5001/?user=john
module.exports = authorize;

const express = require('express');
const router = express.Router();

const {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
} = require('../controllers/people');

module.exports = router;

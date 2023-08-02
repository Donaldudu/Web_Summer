const express = require('express');
const router = express.Router();
const signupStudent = require('../Controller/SignupController').default;

// POST route to handle student signup
router.post('/signup', signupStudent);

module.exports = router;

const express = require('express');
const router = express.Router();
const {signup_student, signup_instructor} = require('../Controller/AdminController');

router.post('/signupStudent', signup_student);
router.post('signupInstructor', signup_instructor);

module.exports= router;
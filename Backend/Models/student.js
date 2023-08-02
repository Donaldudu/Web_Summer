const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields relevant to the student entity here.
  // For example: age, gender, courses, etc.
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

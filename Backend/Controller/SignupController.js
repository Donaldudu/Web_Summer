import Student from '../models/student';

async function signupStudent(req, res) {
  try {
    // Extract relevant data from the request body
    const { name, email, password } = req.body;
    console.log("I'm at line 07");

    // Check if the email already exists in the database
    console.log(email);
    const existingStudent = await findOne({ email:email });
    console.log(existingStudent);
    if (existingStudent) {
      return res.status(404).json({ message: 'Email already registered' });
    }

    // Create a new student object
    const newStudent = new Student({
      name:name,
      email:email,
      password:password // In a real-world scenario, you should hash the password before storing it.
    });

    // Save the new student to the database
    await newStudent.save();

    return res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error in signupStudent controller:', error);
    return res.status(500).json({ message: 'Server error Shahrukh' });
  }
}

export default signupStudent;

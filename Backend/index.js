const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./Routes/admin');

const app = express();
const port = 3000; // You can use any desired port number

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Routes
console.log("Before app.use");
app.use('/students', studentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Set the port

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your frontend files like HTML, CSS, JS)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form data:", name, email, message);

  // Respond back to the client
  res.status(200).json({ message: "Thank you for your message!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

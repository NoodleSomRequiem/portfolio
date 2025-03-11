const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define routes for other pages
app.get('/aboutMe.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'aboutMe.html'));
});

app.get('/projects.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

// Set the port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

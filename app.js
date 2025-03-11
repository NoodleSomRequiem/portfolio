const express = require('express');
const path = require('path');

const app = express();

// Serve static files (like HTML, CSS, JS) from a folder called 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

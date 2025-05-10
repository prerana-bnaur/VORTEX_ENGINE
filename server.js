const express = require('express');
const path = require('path');
const app = express();

// Serve static files like CSS, JS, Images
app.use(express.static(path.join(__dirname, 'public')));

// Set the root page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve other HTML pages
app.get('/jarvis', (req, res) => {
    res.sendFile(path.join(__dirname, 'jarvis.html'));
});

app.get('/vision', (req, res) => {
    res.sendFile(path.join(__dirname, 'vision.html'));
});

app.get('/sonickx', (req, res) => {
    res.sendFile(path.join(__dirname, 'sonickx.html'));
});

app.get('/sargamx', (req, res) => {
    res.sendFile(path.join(__dirname, 'sargamx.html'));
});

app.get('/raptor', (req, res) => {
    res.sendFile(path.join(__dirname, 'raptor.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

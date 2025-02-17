//Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Import comment.js
const comment = require('./comments');

app.get('/comment', (req, res) => {
    res.send(comment.getComment());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
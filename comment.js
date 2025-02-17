//Create Web Server
const express = require('express');
const app = express();
app.use(express.static('public'));

//Create a route
app.get('/comment', (req, res) => {
    res.send('Hello, World!');
});

//Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
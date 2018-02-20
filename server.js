const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./build')));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./build/index.html'));
});

const port = 3001;

app.listen(port, () => {
    console.log('Server started');
})


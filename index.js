const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('My phone server is coming sooooooooon....')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.listen(port, () => {
    console.log(`My server is running on : ${port}`)
})



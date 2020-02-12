const express = require('express');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "hello world"})
})

app.get('/helloagain', (req, res) => {
    res.send({message: "hello world AGAIN"})
})

app.listen(3333)
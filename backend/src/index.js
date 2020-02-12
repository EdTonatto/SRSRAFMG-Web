const express = require('express');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "hello world"})
})

app.listen(3333)
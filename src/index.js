const express = require('express');
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "hello world"})
})

app.get('/helloagain', (req, res) => {
    res.send({message: "hello world AGAIN"})
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
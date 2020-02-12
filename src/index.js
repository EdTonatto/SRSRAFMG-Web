require('dotenv/config')
const express = require('express');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-cft8m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "hello world"})
})

app.get('/helloagain', (req, res) => {
    res.send({message: "hello world AGAIN"})
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
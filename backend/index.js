const mongoose = require('mongoose')
const express = require('express')
const PORT = 3001 
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


const noteSchema = new mongoose.Schema({
    content: String,
    author: String,
    date: Date
})
app.post('/post', (req,res) => {
    res.status(200)
})



app.listen(PORT, () => {
    console.log('listening on Port ', PORT)
})

require('dotenv').config()
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/h',(req,res)=>{
    res.send("d")
})


app.listen(process.env.PORT);
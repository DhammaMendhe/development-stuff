const express = require('express')
const fetchNode = require('node-fetch')
const app = express();
const PORT = 5000
const bodeParser = require('body-parser')

const router = require('../routes/Routes')

// app.use(express.static('public/index.html'))
// fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9461b6979b36648bdcccad4431800cad",
// )
// fetch('/submit',{
//     method:'POST',
//     headers:{
// 'Content-Type': 'application/x-www-form-urlencoded'    },
// body:urlEncoded.stri
// }
// )




app.listen(PORT,()=>{
    console.log("app listening....")
})

module.exports =PORT;
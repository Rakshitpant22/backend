require('dotenv').config()

const express = require('express') // can also use import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => { 
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
     res.send("rakshitPant.com")
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })
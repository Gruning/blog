const express = require('express')
const bodyParser = require('body-parser')
cosnt { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

app.get('/posts/:id/comments',(req,res)=>{
    
})
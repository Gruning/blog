const express = require('express')
const bodyParser = require('body-parser')
cosnt { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

const commentsByPostId ={}

app.get('/posts/:id/comments',(req,res)=>{
    
})

app.get('/posts/:id/comments',(req,res)=>{

})
app.listen(4001,()=>{
    console.log('listening on 4001');
})
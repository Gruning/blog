const express= require('express')
const app = express() 
const { randombytes } = require('cripto')

const posts = {}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts',(req,res)=>{
    const id  = randombytes(4).toString('hex')
})

app.listen(4000,()=>{
    console.log('listening on 4000');
})
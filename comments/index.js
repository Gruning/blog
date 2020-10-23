const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(bodyParser.json())

const commentsByPostId ={}

app.get('/posts/:id/comments',(req,res)=>{
    console.log(req.params.id)
    console.log(commentsByPostId)
    console.log(commentsByPostId[req.params.id ]);
    res.send(commentsByPostId[req.params.id ]||[])
})

app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentsByPostId[req.params.id] || []
    comments.push({id: commentId , content})
    console.log(req.params.Id)
    console.log(comments)
    commentsByPostId[req.params.Id] = comments
    console.log(commentsByPostId)
    res.status(201).send(comments)
})
app.listen(4001,()=>{
    console.log('listening on 4001');
})
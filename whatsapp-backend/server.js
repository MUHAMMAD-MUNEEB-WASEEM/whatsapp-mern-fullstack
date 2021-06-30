//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'


//app config
const app = express()
const port = process.env.PORT || 9000 

//middleware
app.use(express.json()) //To convert string to json

//DB config
const connection_url = 'mongodb+srv://admin:WrKNg2Jfc5vUkVLw@cluster0.kgp7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//mongodb stuff

//api routes
app.get('/', (req, res)=>res.status(200).send('hello world'))

// ********** get data from db **********

app.get('/messages/sync', (req, res)=>{
    Messages.find((err, data)=>{
        if (err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})


// ********** send message api ********** 
app.post('/messages/sync', (req, res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=>{
        if (err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


//listen
app.listen(port, ()=>console.log(`Listening on localhost: ${port}`))
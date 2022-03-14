const cors = require('cors')

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router') 
mongoose
  .connect('mongodb+srv://hoangthach1402:hoangthach123@cluster0.gjaml.mongodb.net/store1DB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express()
    app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
    app.use(cors())

    app.use('/api', routes) // 

    console.log('mongoose is connect')
app.listen(5000, () => {
  console.log('Server has started!')
})
})
const express = require('express')
const Question = require('./Model/Question') 

const moment = require('moment')
const router = express.Router()

router.get('/question/',async (req,res)=>{
   const question = await Question.find({})
   res.send(question)
})

router.post('/question',async (req,res)=>{
    let question = new Question 
    question.question = req.body.question ;
    question.answers = req.body.answers
    await question.save()
    res.send(question)
  
})


module.exports = router
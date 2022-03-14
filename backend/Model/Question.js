const mongoose = require('mongoose')


const questionSchema = mongoose.Schema({
 
   question:String,
   answers:[]
});
module.exports = mongoose.model('Question',questionSchema ) 


 

   

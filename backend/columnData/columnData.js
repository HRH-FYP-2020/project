var mongoose = require('mongoose');
var bodyParser = require('body-parser') 
var Schema = mongoose.Schema;

module.exports =function(app){
    var userSchema = new Schema({
        monday:Number,
        tuesday:Number,
        wednesday:Number,
        thursday:Number,
        friday:Number,
        saturday:Number,
        sunday:Number
      });
var days = mongoose.model('days',userSchema);
module.exports = days
app.get('/column/data',(req,res)=>{
  days.find({},function(err,data){
      if(err){
          console.log(err)
      }else if(data.length){
          console.log(data)
          res.json(data) 
      }
  })
});




}//function end here

// var values = new days({
//     monday:1,
//     tuesday:2,
//     wednesday:3,
//     thursday:4
// })
// values.save(function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('saved')
//     }
// })
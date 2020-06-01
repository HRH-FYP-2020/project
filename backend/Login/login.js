var mongoose = require('mongoose');
require('../models/User')
var bodyParser = require('body-parser') 
module.exports =function(app){
  var  days = mongoose.model('days') 
const users = mongoose.model('users');

app.post('/login',bodyParser.json(),(req,res)=>{
users.find({email:""+req.body.user.email,role:{$ne:null}} ,function(err,data) {
    if(err){
console.log("Not Found"+err);

}else if(data.length){
    if(data[0].role!=""){
var date = new Date().getDay()
days.find({},function(err,da){
var dayItem =["monday","tuesday","wednesday","thursday","friday","saturday","sunday"] 
 //start

for(var i=0;i<dayItem.length;i++){
    if(i==date){
            var day = dayItem[i-1]  
            var value = da[0][day] +1
        days.findOneAndUpdate({[day]: da[0][day]}, {$set: {[day]:value}},  function(err,dat) {
                if(err){
                   console.log('error in second')
                }else{
                //    console.log('data'+dat)
              
            
            } 
            
})    
    }
}

})
    res.send({result:true,resultDetail:""+data[0].role});    
}else(
    res.send({result:false})
)///
}

});//
});//
}//function end here

var mongoose = require('mongoose')
var bodyParser = require('body-parser');
const DB = require( '../../models')
require('../../models/message')
const auth = require('../auth');
const router = require('express').Router();
const Message = mongoose.model('Message'); 
router.post('/send', bodyParser.json(), (req, res, next) => {
    const data = Message({
        email:req.body.user.personEmail,
        name:req.body.user.personName,
        subject:req.body.user.personSubject,
        message:req.body.user.personMessage,
        status:false

      })
      data.save(function(err){
        if(err){
            console.log(err)
        }else{
            res.send({result:true,resultDetail:"successfully "});
        }
    })
    });

///Get All Messages
router.get('/get',function(req,res){
    Message.find({},function(err,data){
    if(err){
        res.send({error:err})
    }else {
        // console.log(data[0].name)
        res.send({data:data})
    }
    })
    // console.log('Here'+listOfObjects)
    // res.json(listOfObjects)
})

//Reply to the message
router.post('/reply',function(req,res){
    console.log(req.body.id)
    Message.findOneAndUpdate({_id:req.body.id,status:false},{$set:{status:true}},function(err,data){
        
        if(err){
            console.log(err)
        }else if(data != null){
            const nodemailer = require('../../nodeMailer/nodeMailer')
            const text = `   ${req.body.reply}`
            nodemailer(data.email,'Reply To Your Message From COC',text)
            res.send({result:true,message:'You Have successfully replied to this Message'})
        }else{
            res.send({result:false,message:'You Have Already replied to this Message'})
        }

    })
  
})


    module.exports = router;
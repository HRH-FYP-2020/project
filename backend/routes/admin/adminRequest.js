var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/User')
require('../../models/officers')
const auth = require('../auth');
const router = require('express').Router();
const Users = mongoose.model('users');
const Officers = mongoose.model('Officers')  
  //Request Accept ***************************
    router.get('/viewmembersdata',auth.required,bodyParser.json(),(req,res)=>{
    //  console.log(req.body.user.email)
        Users.find({},function(err,data){

         res.send(data)
     })

  })


  router.post('/create/user',auth.required,bodyParser.json(),(req,res)=>{
        if(!req.body.user.update){
              Officers.find({email:req.body.user.email},function(err,data){
                      if(err){
                        res.send({result:false,err:'Error while searching in mongoose'})
                      }else if(data.length >  0 ){
                        res.send({result:false,err:'User Already Exists'})
                      }else if(data.length === 0 ){
                        const Officer = Officers({
                          email:req.body.user.email,
                          name:req.body.user.name,
                          mobileNo:req.body.user.mobileNo,
                          role:req.body.user.role,
                          
                        })
                        var randomstring = Math.random().toString(36).slice(-8);
                        Officer.setPassword(randomstring);
                        Officer.save(function(err,data){
                          if(err){
                              res.send({result:false,err:'Error while searching in mongoose'})
                          }else{
                            Mailer(req.body.user.email,'COC Notification',`Congragulation  ${req.body.user.email} you hava been added to Officers list of COC . Your password is ${randomstring}`)
                              res.send({result:true,message:` ${req.body.user.email} This user Has been Added As A  ${req.body.user.role}`})
                          }
                        })    
                      }
              })
              
          }else{
                Officers.findOneAndUpdate({email:req.body.user.email},{$set:{role:req.body.user.role}},function(err,data){
                  if(err){
                    res.send({result:false,err:'Error while searching in mongoose'})
                  }else if(data !==null){
                    Mailer(req.body.user.email,'COC Notification',` ${req.body.user.email} your Designation  has been updated from ${data.role} to ${req.body.user.role}`)
                    res.send({result:true,message:`The Designation oF ${req.body.user.email} has been updated from ${data.role} to ${req.body.user.role}`})
                  }else{
                    res.send({result:false,err:'No user Found'})
                  }
                })
          }
      })


      router.get('/delete/officer/:email',auth.required,bodyParser.json(),function(req,res){
        Officers.findOneAndDelete({email:req.params.email},function(err,data){
          if(err){
            res.send({message:'Something Went Wrong'})
          }else{
            res.send({message:'Successfully Deleted the officer'})
          }
        })
      })


      function Mailer(email,subject,text){
        console.log('HERE')
        const nodemailer = require('../../nodeMailer/nodeMailer')
            nodemailer(email,subject,text)
      }
    module.exports = router;
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/User')
require('../../models/officers')
const auth = require('../auth');
const router = require('express').Router();
const Officers = mongoose.model('Officers')
const Users = mongoose.model('users'); 
router.post('/profile', auth.required,bodyParser.json(), (req, res, next) => {
console.log(req.body.user)
  
  if(req.body.user.role === 'member'){
    Users.find({_id:req.body.user.id},function(err,data){
      if(err){
         res.sendStatus(500);
      }else{
       // TODO: Need to remove salt and hash from user object
         res.json({ users: data });    
      }
    });
  }else{
    Officers.find({_id:req.body.user.id},function(err,data){
      if(err){
         res.sendStatus(500);
      }else{
       // TODO: Need to remove salt and hash from user object
         res.json({ users: data });    
         console.log(data)
      }
    });
 
  } });
    


router.post('/data', auth.required,bodyParser.json(), (req, res, next) => {
  Users.find({email:''+req.body.user.email},function(err,data){
    if(err){
       res.sendStatus(500);
    }else if(data.length){
      res.json({result:true, users: data });     
    } else {
      res.json({ result:false,message: 'No Data Found'});     
    }
  });
});
router.get('/totalEmployes/data', auth.required, (req, res, next) => {
  Users.find({},function(err,data){
    if(err){
       res.sendStatus(500);
    }else{
       res.json({ users: data });    
    } 
  });
});

router.get('/officers',(req, res, next) => {
  Officers.find({},function(err,data){
    if(err){
       res.sendStatus(500);
    }else{
       res.json({ users: data });    
    } 
  });
});
router.get('/members',(req, res, next) => {
  Users.find({},function(err,data){
    if(err){
       res.sendStatus(500);
    }else{
       res.json({ users: data });    
    } 
  });
});



module.exports = router;
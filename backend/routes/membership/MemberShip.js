var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/chalan')
const auth = require('../auth');
const router = require('express').Router();
const Users = mongoose.model('users'); 
router.get('/request', auth.required, (req, res, next) => {
      Users.find({email1V:"accepted",email2V:"accepted",role:""},function(err,data){
        if(err){
          return res.sendStatus(400);
        }else{
         // TODO: Need to remove salt and hash from user object
          res.send(data)
            
        }
      });
    });
    // router.post('/viewAllData', auth.required,bodyParser.json(), (req, res, next) => {
    //   Users.find({email:req.body.user.email},function(err,data){
    //     console.log(data)
    //     if(err){
    //       return res.sendStatus(400);
    //     }else{
    //       res.json(data)
            
    //     }
    //   });
    // });
    //Request Accept ***************************
    router.post('/request/accept',bodyParser.json(),(req,res)=>{
      Users.findOneAndUpdate({email:req.body.user.email},{$set:{role:"genrateBill"}},function(err,data){
        if(err){
            console.log(err)
        }else{
            res.send({result:true})
            // Users.findOneAndUpdate({email:req.body.user.email},{$set:{}})
            generateBill(req.body.user.email)
        }
    })
  })
  //***************** */

  //Request Decline ******************************
  router.post('/request/decline',auth.required,bodyParser.json(),(req,res)=>{
    Users.findOneAndDelete({email:''+req.body.email},function(err,data){
        if(err){
        res.send({result:false,resultDetail:'Unsuccessfully.'});
        }else{
          res.send({result:true,resultDetail:'successfully.'});
        }
    })
        })

//****************************** */
router.get('/request/records',auth.required,(req,res)=>{
  Users.find({},function(err,data){
    if(err){
        console.log(err)
    }else{
      // console.log(data)
        res.json({users:data})
  
    }
})

})

//********************************************* */

//genrateBill 
function generateBill(email){
  let length;

var chalan = mongoose.model('chalan')
chalan.find({},function(err,chalanData){
  length = chalanData.length
  var data = chalan({
      id:'MC_'+(length+1),
      email:''+email,
      bill:250,
      status:'No',
      print:'',
      printed:'No',
      delivered:'No',
      collected:'No',
      type_of_request:''
  })

  data.save(function(err){
    if(err){
        console.log(err)
    }else{
      console.log('success')
    }
})

})
 
}

    module.exports = router;
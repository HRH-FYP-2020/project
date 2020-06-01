var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/chalan')
require('../../models/amount')
require('../../models/User')
require('../../models/visaArrival')
require('../../models/visaBill')
const auth = require('../auth');
const router = require('express').Router();
const chalan = mongoose.model('chalan');
const Users = mongoose.model('users'); 
const amount = mongoose.model('feeAmount'); 
const visaBill = mongoose.model('visalBill');
  //Request Accept ***************************
    router.get('/bill',auth.required,(req,res)=>{
      Users.find({ $or: [ {role:'genrateBill'}, { role:'genrateBill'} ] },function(err,data){
        if(err){
            console.log(err)
        }else if(data !== null){
            res.send(data)
            // console.log(data)
         }else {
            res.send({user:false})
         }
    })   
  })
 
  router.get('/bill/visa',auth.required,(req,res)=>{
    visaBill.find({},function(err,data){
      if(err){
          console.log(err)
      }else if(data !== null){
          res.send({Bill:data})
       }else {
          res.send({user:false})
       }
  })
})

  router.post('/bill/status',auth.required,bodyParser.json(),(req,res)=>{
    chalan.find({email:''+req.body.email},function(err,data){
      if(err){
          console.log(err)
      }else if(data !== null){
          res.send({user:data})
        }else {
          res.send({user:false})
       }
  })
})
  router.post('/accept',auth.required,bodyParser.json(),function(req,res){
    chalan.findOneAndUpdate({_id:req.body.user.email,print:''},{$set:{print:'Yes'}},function(err,data){
       
        if(err){
            console.log(err)
        }else if(data !== null){
            res.send({result:true})
        }else{
            res.send({result:false})
        }
    })

  })
  router.put('/amount',auth.optional,bodyParser.json(),function(req,res){
  const name = req.body.amount.name
  const value = req.body.amount.value
  amount.findOneAndUpdate({}, {$set: {[name]:value}},function(err,data){
        if(err){
            console.log(err)
        }else if(data !== null){
          res.send({result:true,data:data})
            
        }else{
            res.send({result:false,})
        }
      })
  })




  router.get('/amount/get',auth.required,(req,res)=>{
    amount.find({},function(err,data){
      if(err){
          console.log(err)
      }else if(data !== null){
          res.send(data)
       }else {
          res.send({user:false})
       }
  })
})


// router.get('/visa/bill/:ID',)




/////////////////////////////////NEW CREATED METHODS ///////////////////////////////////////////////////////////////////

router.get('/fetch/Bill/:id/:type',auth.required,(req,res)=>{
        let methods=''
        if(req.params.type === "MEMBERSHIP"){
            methods= mongoose.model('chalan');

          }else{
            methods=mongoose.model('visalBill');
          }
          methods.find({id: ''+req.params.id},function(err,data){
            if(err){
              console.log(err)
            }else if(data.length){
              console.log(data)
                res.send({result:true,Bill:data})
            }else if(data.length === 0){
              // console.log(data)
              res.send({result:false})
            }
          })
  })

  router.get('/bill/payment/:id/:type',(req,res)=>{
      let methods=''
      let status=''
      if(req.params.type === "MEMBERSHIP"){
          methods= mongoose.model('chalan');
          status = 'status'

        }else{
          methods=mongoose.model('visalBill');
          status = 'Status'
        }
        mongoose.set('useFindAndModify', false);
        methods.findOneAndUpdate({id:req.params.id}, {$set: {[status]:'true'}},function(err,data){
          if(err){
              console.log(err)
          }else if(data !== null){
              res.send({result:true})
          }else{
              res.send({result:false,user:data})
          }
        })
  })


    module.exports = router;
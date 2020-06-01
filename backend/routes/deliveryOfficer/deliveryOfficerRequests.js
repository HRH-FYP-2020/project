var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/chalan')
require('../../models/visaBill')
const visaBill = mongoose.model('visalBill');

const auth = require('../auth');
const router = require('express').Router();
const chalan = mongoose.model('chalan');  
  //Request Accept ***************************
    router.get('/print',auth.required,(req,res)=>{
      chalan.find({printed:'Yes',delivered:'No'},function(err,data){
        if(err){
            console.log(err)
        }else if(data !== null){
            // res.send({user:data})
            res.send(data)
         }else {
            res.send({user:false})
         }
    })
  })
  router.get('/visa',auth.required,(req,res)=>{
    visaBill.find({printed:true,delivred:false},function(err,data){
      if(err){
          console.log(err)
      }else if(data !== null){
          res.send({result:true,user:data})
       }else {
          res.send({result:false,message:'No Data Found'})
       }
  })
})

router.get('/deliver/:id',auth.required,(req,res)=>{
  if(req.params.id[0] === 'V'){
    visaBill.findOneAndUpdate({chalan_id:req.params.id},{$set:{delivred:true}},function(err,data){
      if(err){
        console.log(err)
      }else if(data !== null){
        res.send({result:true,message:'Delivered Successfully'})
      }else{
        res.send({result:false,message:'NO Chlan Matching This Id is Found'})
      }
    })
  }else if(req.params.id[0] === 'M'){     
        chalan.findOneAndUpdate({id:''+req.params.id},{$set:{delivered:'Yes'}},function(err,data){
          console.log(data)
          if(err){
            console.log(err)
          }else if(data !== null){
            console.log('Here')
            res.send({result:true,message:'Delivered Successfully'})
          }else{
            res.send({result:false,message:'NO Chlan Matching This Id is Found'})
          }
        })
  }
})


  router.post('/accept',auth.required,bodyParser.json(),function(req,res){
    chalan.findOneAndUpdate({_id:req.body.user.email},{$set:{delivered:'Yes'}},function(err,data){
       console.log('Herer')
        if(err){
            console.log(err)
        }else if(data !== null){
            res.send({result:true})
        }else{
            res.send({result:false})
        }
    })

  })


    module.exports = router;
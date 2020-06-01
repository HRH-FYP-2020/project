var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/chalan')
require('../../models/visaBill')
const auth = require('../auth');
const router = require('express').Router();
const chalan = mongoose.model('chalan');  
const visaBill = mongoose.model('visalBill');
  //Request Accept ***************************

  router.post('/getuser',auth.required,(req,res)=>{
    console.log(req.body.id)
    if(req.body.id[0] === 'V'){
      visaBill.find({chalan_id:req.body.id},function(err,data){
        if(err){
          console.log(err)
        }else if(data.length){
          res.send({result:true,UserBill:data})
        }else{
          res.send({result:false,message:'NO Chlan Matching This Id is Found'})
        }
      })
    }else if(req.body.id[0] === 'M'){
        chalan.find({id:req.body.id},function(err,data){
          if(err){
            console.log(err)
          }else if(data.length){
            res.send({result:true,UserBill:data})
          }else{
            res.send({result:false,message:'NO Chlan Matching This Id is Found'})
          }
        })
    }


//     chalan.find({print:'Yes',printed:'No'},function(err,data){
//     if(err){
//         console.log(err)
//     }else if(data !== null){
//       res.send(data)

//      }
// })
})

    router.get('/print',auth.required,(req,res)=>{
        chalan.find({print:'Yes',printed:'No'},function(err,data){
        if(err){
            console.log(err)
        }else if(data !== null){
          res.send(data)

         }
    })
  })

router.get('/visa',auth.required,bodyParser.json(),function(req,res){
        visaBill.find({Status:true},function(err,data){

          if(err){
            console.log(err)
          }else if(data.length){
            res.send({result:true,visaBills :data})
          }else{
            res.send({result:false,message :"NO Visa Bill To Print Is Available"})
          }
          console.log(data)
        })

})

  router.post('/accept',auth.required,bodyParser.json(),function(req,res){
    if(req.body.id[0] === 'V'){
      visaBill.findOneAndUpdate({chalan_id:req.body.id},{$set:{printed:true}},function(err,data){
        if(err){
          console.log(err)
        }else if(data.length){
          res.send({result:true,UserBill:data})
        }else{
          res.send({result:false,message:'NO Chlan Matching This Id is Found'})
        }
      })
    }else if(req.body.id[0] === 'M'){     
          chalan.findOneAndUpdate({id:''+req.body.id},{$set:{printed:'Yes'}},function(err,data){
            
              if(err){
                  console.log(err)
              }else if(data !== null){
                  res.send({result:true})
              }else{
                  res.send({result:false})
              }
          })
    }
  })


    module.exports = router;
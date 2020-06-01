var mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('../../models/chalan')
const auth = require('../auth');
const router = require('express').Router();
const chalan = mongoose.model('chalan'); 
router.post('/chalan', auth.required, bodyParser.json(),(req, res, next) => {
chalan.find({email:req.body.user.email,status:"No"},function(err,data){
    // console.log("Data"+data)
    if(err){
        console.log(err)
    }else if (data.length){         
        res.json({users:data})   
    }else{
        res.json({users:false})
    }
})
})
router.post('/paid', auth.required,bodyParser.json(), (req, res, next) => {
    console.log('Here')
    chalan.findOneAndUpdate({email:req.body.user.email,status:'No'}, {$set: {status:"paid"}},  function(err,data) {
        if(err){
            console.log(err)
        }else if(data !== null){
            res.send({result:true})
        }else{
            res.send({result:false})
        }
    })
})

// router.post('/notification', auth.required,bodyParser.json(), (req, res, next) => {
//     // console.log(req.body.user.email)
//     chalan.findOneAndUpdate({email:'saqlainmushtaq@gmail.com'},  function(err,data) {
//         console.log('Here')
//         if(err){
//             console.log(err)
//         }else if (data.length){   
//             console.log('req.body.user.email')
//             res.json({users:data})   
//         }else{
//             console.log('req.body.user.email22')
//             res.json({users:false})
//         }
//     })
// })


    module.exports = router;
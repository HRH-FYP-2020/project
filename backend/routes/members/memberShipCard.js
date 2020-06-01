
var mongoose = require('mongoose')
var bodyParser = require('body-parser');

require('../../models/memberShipCard')
const auth = require('../auth');
const router = require('express').Router();
var memberShip = mongoose.model('memberShip')
    router.post('/request/form',auth.required,bodyParser.json(),(req,res)=>{
        var data = memberShip({
            representativeName:req.body.user.representativeName,
			businessName:req.body.user.businessName,
			businessAddress:req.body.user.businessAddress,
			cnic:req.body.user.cnic,
			email:req.body.user.email
        })
        data.save(function(err){
            if(err){
                console.log(err)
            }else{
              res.send({result:true})
            }
        })
     
    })
    module.exports = router;
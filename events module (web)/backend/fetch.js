var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var reg = mongoose.model('Reg');
require ('./db')
module.exports =function(router){
router.get('/getdata',function(req, res, next){
console.log('here')
    reg.find({}, function(err,docs){
        if(err){
            console.log(err)
        }else{
            res.json({users: docs})
        }``
    })
    
});
}
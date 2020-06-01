var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var reg = mongoose.model('Reg');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
module.exports =function(router){
var category=[];
router.post("/reg",bodyParser.json(),(req,res)=>{
    
    console.log("herrere",req.body)
    
    
    // console.log(category);
    var data = new reg({
        name : req.body.form.name,
        lastname : req.body.form.lastname,
        email : req.body.form.email,
        date : req.body.form.date,
        venue : req.body.form.venue,
        options : req.body.form.options,
        seats : req.body.form.seats,
        discription : req.body.form.discription,
       
        
    });
    

    data.save(function(err){
        

        if(err){
            console.log("Error occured"+ err);
        }
    });
    res.json({here:"yes"})
})}

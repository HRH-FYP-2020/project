var mongoose = require('mongoose')
var bodyParser = require('body-parser');
module.exports =function (app){
var users = mongoose.model('users');
// var admin = true


////MemberShip Request Showing to member Ship Officer 
    // app.post('/membership/request',bodyParser.json(),(req,res)=>{
    //           users.find({first:"accepted",second:"accepted",role:""},function(err,data){
    //               if(err){
    //                   console.log(err)
    //               }else{
    //                   res.json(data)
    //               }
    //           })  
        
    //   })


    //////Reccommendationssss
    // app.get('/recomendation',(req,res)=>{
    //     users.find({role:req.body.email},function(err,data){
    //         if(err){
    //             console.log(err)
    //         }else if(data.length){
    //             res.json(data) 
    //         }
    //     })
  
    //   });



//////accept the request of membership from membership office

    // app.post('/confirm/request',bodyParser.json(),(req,res)=>{
    //     var approved= false 
    //     users.find({email:req.body.user.myEmail,role:'admin'},function(err,data){
    //         if(err){
    //             console.log(err)
    //         }else if(data.length){
    //             // console.log('admin')
    //             // console.log('data'+data)
    //         }else{
    //                 // console.log('not admin')
    //     users.findOneAndUpdate({second: ""+req.body.user.myEmail}, {$set: {second:""+req.body.user.status}},  function(err) {
    //         if(err){
    //            console.log('error in second')
    //         }else{
    //            // console.log('hererererr')
    //            approved=true
          
        
    //    }
    //      });
    //      users.findOneAndUpdate({first: ""+req.body.user.myEmail}, {$set: {first:""+req.body.user.status}},  function(err) {
    //        if(err){
    //        console.log('error in first')
    //        }else{
    //           // console.log('hererererr')
    //                approved=true
          
       
    //   }
    //     });
    //     if(approved){
    //         console.log('herere')
    //        res.send({result:true,resultDetail:"successfully update in second_person."});
    //     }
    //         }
    //     }) 
       
    //     })


}
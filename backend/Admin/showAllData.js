var mongoose = require('mongoose')
module.exports =function (app){
var users = mongoose.model('users');
    app.get('/viewmembersdata',(req,res)=>{

        // console.log('jasdgfhaskdfa')

      users.find({},function(err,data){
          if(err){
              console.log(err)
          }else if(data.length){
              console.log(data)
              res.json(data) 
          }
      })
    });

    // app.get('/profile',(req,res)=>{

    //     // console.log('jasdgfhaskdfa')

    //   users.find({email:"tanolihamzaali@gmail.com"},function(err,data){
    //       if(err){
    //           console.log(err)
    //       }else if(data.length){
    //           console.log(data)
    //         res.json(data) 
    //       }
    //   })
    // });
}
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
const auth = require('../auth');
const router = require('express').Router();
const Users = mongoose.model('users');
var nodemailer = require('nodemailer')
 
router.post('/recommendation',auth.required,bodyParser.json(),(req,res)=>{
    Users.find({email1V:req.body.user.email},function(err,content){
        if(err){
            console.log(err)
        }else if(content.length){
            res.send(content)    
        }
})
    })
  

    //TODO: work on this 
router.post('/recommendation2',auth.required,bodyParser.json(),(req,res)=>{
    Users.find({email2V:req.body.user.email},function(err,content){
        if(err){
            console.log(err)
        }else if(content.length){
            res.send(content)    
        }
})
})







    //Request Accept ***************************
    router.post('/request/accept',auth.required,bodyParser.json(),(req,res)=>{
        Users.findOneAndUpdate({email1V: req.body.user.myEmail,email:req.body.user.email}, {$set: {email1V:""+req.body.user.status,role:'confirm'}},  function(err,data) {
            if(err){
    }else if(data ==null){
        Users.findOneAndUpdate({email2V:req.body.user.myEmail,email:req.body.user.email}, {$set: {email2V:""+req.body.user.status,role:''}},  function(err,dataa) {
        if(err){
            console.log('error in first')
        }else if(dataa != null){
            res.send({result:true,resultDetail:"successfully update in second_person."});
   }      
        
        })
    }else{
         
            res.send({result:true,resultDetail:"successfully update in first_person."});
}
 }); 
  })
  //***************** */

  //Request Decline ******************************
  router.post('/request/decline',auth.required,bodyParser.json(),(req,res)=>{
      console.log(typeof(''+req.body.email))
    Users.findOneAndDelete({email:''+req.body.email},function(err,data)
    {
        if(err){
            console.log(err)
        }else{
            nodeMailer(req.body.email)
            res.send({result:true,resultDetail:"successfully "});
        }
    })
        })

//****************************** */
//nodemailer
function nodeMailer(email){
    email = 'tanolihamzaali@gmail.com'
    async function main() {
        // let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'cocfyp2020@gmail.com', // generated ethereal user
                pass: "COCFYP2020" // generated ethereal password
            }
        });
    
        let info = await transporter.sendMail({
            from: 'tanolihamza5ali@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html:'<p >Your Request For MemberShip Has Been Rejected</p>' 
            // '<a href="http://localhost:3000/authenticate/'+email+'">click here</a>' // html body
        });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // console.log('Node Mailer hogay han bahi')
    }
    
    main().catch(console.error);
  }

    module.exports = router;
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer')
const router = require('express').Router();
const Users = mongoose.model('users');
 
router.post('/auth',bodyParser.json(),(req,res)=>{ 
    // console.log('here' + req.body.user)
    // Users.findOneAndUpdate({"email": ""+req.body.aaaa.email,role:""}, {$set: {"role": "confirm"}},  function(err,doc) {
        // if (err) { throw err; }
        // else { console.log("Updated in sign up");

        nodeMailer(req.body.user)
        res.send('hahah') /// send the return msg from nodemailer to client side

    // }
    //   }); 
})

function nodeMailer(email){
    console.log('here')
    // email = 'tanolihamzaali@gmail.com'
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
            from: 'cocfyp2020@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Verification', // Subject line
            text: '', // plain text body
            html:'<p >Dear User Please Click The Below Link To SignUp to <b>COC</b></p><a href="http://localhost:3006/signUp/'+email+'">click here</a>' // html body
        });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // console.log('Node Mailer hogay han bahi')
    }
    
    main().catch(console.error);
  }
  
    module.exports = router;
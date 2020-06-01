var mongoose = require('mongoose')
var bodyParser = require('body-parser');
const auth = require('../auth');
require('../../models/visaArrival')
require('../../models/visaBill')
require('../../models/amount')
const router = require('express').Router();
const visaArrival = mongoose.model('visalArrival');
const nodemailer = require('nodemailer')
const visaBill = mongoose.model('visalBill');
const chalan = mongoose.model('feeAmount');
const multer  = require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage: storage})

//****************************** */

router.post('/request/visa/arrival',auth.required,bodyParser.json(),(req,res)=>{
            var vAId= ''
            var date = new Date();
        visaArrival.find({},function(err,content){
            if(err){
                console.log(err)
            }else{
                vAId = 'VA'+(content.length+1)
                const data = visaArrival({
                    id: vAId,
                    email_of_member:req.body.visaArrival.email_of_member,
                    APP_type:req.body.visaArrival.APP_type,
                    organization_Name:req.body.visaArrival.organization_Name,
                    person_Name:req.body.visaArrival.person_Name,
                    profession:req.body.visaArrival.profession,
                    Purpose_Of_Visit:req.body.visaArrival.Purpose_Of_Visit,
                    Project_Name:req.body.visaArrival.Project_Name,
                    Funding_Org:req.body.visaArrival.Funding_Org,
                    Address_stay:req.body.visaArrival.Address_stay,
                    City_Visit:req.body.visaArrival.City_Visit,
                    No_Of_Person:req.body.visaArrival.No_Of_Person,
                    Stay_Days:req.body.visaArrival.Stay_Days,
                    Flight_Arrival:req.body.visaArrival.Flight_Arrival,
                    Flight_num:req.body.visaArrival.Flight_num,
                    Flight_DEP:req.body.visaArrival.Flight_DEP,
                    Flight_num_dep:req.body.visaArrival.Flight_num_dep,
                    Agenda_det:req.body.visaArrival.Agenda_det,
                    status:'Pending',
                    submissionDate:date
        
                  })
                  data.save(function(err){
                    if(err){
                        console.log(err)
                    }else{
                        const text = `You request For visa request of ${req.body.visaArrival.person_Name} has been successfully submited.`
                        nodeMailer(req.body.visaArrival.email_of_member,text)
                        res.send({result:true,resultDetail:"successfully "});
                    }
                })
            }
        })
       
        
      })

router.post('/request/visa/abroad',auth.required,bodyParser.json(),(req,res)=>{
    console.log(req.body.visaAbroad)

    })
////all request of visa approved aor pending are sent to FE below
router.get('/request/visa/data',auth.optional,(req,res)=>{
    visaArrival.find({},function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json({users:data})
        }
    })
})

////getting specific members data 
router.post('/getData/arrival',auth.required,bodyParser.json(),(req,res)=>{
    visaArrival.find({id:req.body.user.app_id},function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json({users:data})
        }
    })
    })
// ??**********************************************
//for accepting that  specfic person visa request 
router.post('/request/accept',bodyParser.json(),(req,res)=>{
   
    visaArrival.findOneAndUpdate({id:''+req.body.user.app_id},{$set:{status:"In Progress"}},function(err,data){
        if(err){
            console.log(err)
        }else{          
            nodeMailer(req.body.user.email,'Visa Request',"Your Request has been accepted by visa Officer Please Pay you Bill")
            chalan.find({},function(err,chalanAmount){
                if(err){
                    console.log(err)
                }else if(chalanAmount.length){
                    visaBill.find({},function(err,dataOfBill){
                        if(err){
                            console.log(err)
                        }
                        const Bill = visaBill({
                            id:data.id,
                            chalan_id:"VBI_"+dataOfBill.length+1,
                            email_of_member:data.email_of_member,
                            App_Type:data.APP_type,
                            Amount:chalanAmount[0].visa_arrival,
                            Status:"pending",
                            date:data.submissionDate,
                            printed:false,
                            delivred:false

                          })
            
                        //   console.log(Bill)
                          Bill.save()
                          res.send({result:true})
                    })
                    
              
                }
            })

            // console.log(chalanFee)
           
        }
    })
    })
// ************************************************* Decline
router.post('/request/decline',auth.required,bodyParser.json(),(req,res)=>{
    visaArrival.findOneAndDelete({id:''+req.body.user.id},function(err,data){
        if(err){
        res.send({result:false,resultDetail:'Unsuccessfully.'});
        }else{
            const subject = 'Visa Request Response'
            const text ='You request For visa has been Declined By COC.'  
            nodeMailer(req.body.user.email,subject,text)
            res.send({result:true,resultDetail:'successfully.'});

        }
    })
        })
//nodemailer
function nodeMailer(email,subject,text){
    email = email
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
            to: email,
            subject: subject, 
            text: text
        });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // console.log('Node Mailer hogay han bahi')
    }
    
    main().catch(console.error);
  }


////////////////////////////////////////NEW CREATED METHODS////////////////////////////////////////////

// router.post('/Abroad/data',bodyParser.json(),(req,res)=>{
//     var multer  = require('multer')
//     var upload = multer({ dest: 'uploads/' })
//     visaArrival.findOneAndDelete({id:''+req.body.user.id},function(err,data){
//         if(err){
//         res.send({result:false,resultDetail:'Unsuccessfully.'});
//         }else{
//             const subject = 'Visa Request Response'
//             const text ='You request For visa has been Declined By COC.'  
//             nodeMailer(req.body.user.email,subject,text)
//             res.send({result:true,resultDetail:'successfully.'});

//         }
//     })
//         })


router.post('/abroad/data', upload.single('productImage'),(req, res, next) =>{


    console.log(req.file)
    res.send(req.file)
    // var storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //       cb(null, '/visaAbroad/'+file.filename)
    //     },
    //     filename: function (req, file, cb) {
    //       cb(null, file.fieldname + '-' + Date.now())
    //     }
    //   })
       
    //   var upload = multer({ storage: storage })
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    })

    module.exports = router;
// var mongoose = require('mongoose')
// var bodyParser = require('body-parser');
// const auth = require('../auth');
// require('../../models/visaArrival')
// require('../../models/visaBill')
// require('../../models/amount')
// const router = require('express').Router();
// // const visaArrival = mongoose.model('visalArrival');
// // const nodemailer = require('nodemailer')
// // const visaBill = mongoose.model('visalBill');
// // const chalan = mongoose.model('feeAmount');
// const multer  = require('multer')
// router.use('/abroad', require('./visaAbroad'));
// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads')
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })
// const upload = multer({storage: storage})
// router.post('/data', upload.single('productImage'),(req, res, next) =>{


//     console.log('req.file')
//     res.send(req.file)
//     })

// module.exports = router;
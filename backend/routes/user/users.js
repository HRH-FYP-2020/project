const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('users');
// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, 'uploads/');
//   },

//   // By default, multer removes file extensions so let's add them back
//   filename: function(req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });
//POST new user route (optional, everyone has access)
router.post('/signUp', auth.optional, (req, res, next) => {
Users.find({email:req.body.form.email},function(err,data){ 
  if(data.length === 1 ){
    return res.send({result:false})     
  }else{
    
    const { body: { form } } = req;

    if(!form.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!form.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = new Users(form);
  
    finalUser.setPassword(form.password);
    // console.log('ashdkglahsdg')
    // res.json({ user: finalUser.toAuthJSON()})
    return finalUser.save()
    .then(() => res.json({result:true}))
      // .then(() => res.json({ user: finalUser.toAuthJSON()}));
  }
})
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;
  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      
      const user = passportUser;
      user.token = passportUser.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    }
    
    return  res.status(404).json({
      message:'User not found'
    });
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

// router.post('/upload-multiple-images', (req, res) => {
//   // 10 is the limit I've defined for number of uploaded files at once
//   // 'multiple_images' is the name of our file input field
//   let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);

//   upload(req, res, function(err) {
//       if (req.fileValidationError) {
//         return res.send(req.fileValidationError);
//     }
//     else if (!req.file) {
//         return res.send('Please select an image to upload');
//     }
//     else if (err instanceof multer.MulterError) {
//         return res.send(err);
//     }
//     else if (err) {
//         return res.send(err);
//     }

//       let result = "You have uploaded these images: <hr />";
//       // const files = req.files;
//       // let index, len;

//       // Loop through all the uploaded images and display them on frontend
//       // for (index = 0, len = files.length; index < len; ++index) {
//       //     result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
//       // }
//       // result += '<hr/><a href="./">Upload more images</a>';
//       res.send(result);
//   });
// });

module.exports = router;
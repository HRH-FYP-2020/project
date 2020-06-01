var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;
var UsersSchema = new Schema({
  application_Type:String,
  business_name:String,
  representative_name:String,
  business_address:String,
  designation:String,
  business_intrest:String,
  bank_name:String,
  name_of_partners:String,
  business_start_date:String,
  ntn_num:String,
  main_line_of_business:String,
  tel_1_business:String,
  tel_2_business:String,
  sale_tex_reg:String,
  endDate:String,
  startDate:String,
  class_of_memberShip:String,
  type_of_memberShip:String,
  url:String,
  uan:String,
  fax:String,
  telNum:String,
  email:String,
  email2:String,
  mobileNum:String,
  mobileNum2:String,
  birthDate:String,
  passport:String,
  hash:String,
  CNIC:String,
  last_name:String,
  first_name:String,
  itemsOfExport:String,
  countriesOfExport:String,
  itemsOfImport:String,
  countriesOfImport:String,
  email1V:String,
  chalanid:[],
  email2V:String,
  role:String,
  salt:String
});

UsersSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };
  
  UsersSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    console.log(this.hash === hash)
    return this.hash === hash;
  };
  
  UsersSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 1);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
  
  UsersSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      role:this.role,
      email: this.email,
      token: this.generateJWT(),
    };
  };

  
mongoose.model('users',UsersSchema);
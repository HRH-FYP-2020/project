var mongoose = require('mongoose');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    email:String,
    name:String,
    subject:String,
    message:String,
    status:Boolean
});

var Message = mongoose.model('Message',UsersSchema)

module.exports=Message
var mongoose = require('mongoose');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    id:String,
    email: String,
    bill: Number,
    status: String,
    print:String,
    printed:String,
    delivered:String,
    collected:String,
    type_of_request:String
    
});

var chalanModel = mongoose.model('chalan',UsersSchema)

module.exports=chalanModel
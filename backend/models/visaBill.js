var mongoose = require('mongoose');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    id:String,
    email_of_member:String,
    App_Type:String,
    Amount:Number,
    Status:String,
    date:Date,
    chalan_id:String,
    printed:false,
    delivred:false
});

var memberShipModel = mongoose.model('visalBill',UsersSchema)

module.exports=memberShipModel
var mongoose = require('mongoose');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    representativeName: String,
    businessName:String,
    businessAddress:String,
    cnic:String,
    email:String
    
});

var memberShipModel = mongoose.model('memberShip',UsersSchema)

module.exports=memberShipModel
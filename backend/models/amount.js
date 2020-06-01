var mongoose = require('mongoose');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    memberShip_urgent:Number,
    memberShip_normal:Number,
    visa_abroad:Number,
    visa_arrival:Number,
    visa_multinational:Number,
    remembership:Number,
    
});

var AmountModal = mongoose.model('feeAmount',UsersSchema)

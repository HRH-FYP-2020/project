var mongoose = require('mongoose');

const { Schema } = mongoose;
var UsersSchema = new Schema({
    id:String,
    email_of_member:String,
    APP_type:String,
    organization_Name:String,
    person_Name:String,
    profession:String,
    Purpose_Of_Visit:String,
    Project_Name:String,
    Funding_Org:String,
    Address_stay:String,
    City_Visit:String,
    No_Of_Person:Number,
    Stay_Days:Number,
    Flight_Arrival:String,
    Flight_num:String,
    Flight_DEP:String,
    Flight_num_dep:String,
    Agenda_det:String,
    status:String,
    submissionDate:Date
});

var memberShipModel = mongoose.model('visalArrival',UsersSchema)

module.exports=memberShipModel
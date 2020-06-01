var mongoose = require('mongoose')

var RegSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    date: String,
    email: String,
    venue: String,
    options: String,
    discription: String,
    seats: String,
    file:String
});
var Reg = mongoose.model('Reg', RegSchema);

module.exports = Reg;
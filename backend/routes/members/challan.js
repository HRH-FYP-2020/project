var mongoose = require('mongoose');
const { Schema } = mongoose;
var UsersSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    
});
  
mongoose.model('chalan',UsersSchema);
let mongoose = require('mongoose');

//create model class
let contactModel = mongoose.Schema({
    contactName:String,
    contactNumber:String,
    email:String,
},

{
    collection:"business"
});

module.exports = mongoose.model('Business',contactModel);
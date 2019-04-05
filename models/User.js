var mongoose = require('mongoose');

// Schema
var userSchema = new mongoose.Schema({
    firstName : String,
    surname : String,
    lastName : String,
    userNo : String,
    nationalId : String,
    gender : String,
    phone : String,
    department : String,
    specialize : String,
    officeNo : String,
    profNo : String,
    mail : String,
    password : String
});

// model
var AdminUser = mongoose.model('AdminUser', userSchema);
var ClinicianUser = mongoose.model('ClinicianUser', userSchema);

module.exports = {
    AdminUser : AdminUser,
    ClinicianUser : ClinicianUser  
};

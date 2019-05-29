var mongoose = require('mongoose');

// Schema
var fileSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    name : String,
    patientNo : String,
    age : String,
    gender : String,
    signs : String,
    tests : String,
    results : String,
    dx : String
});

// model
var AtAdmissionFiles = mongoose.model('AtAdmissionFiles', fileSchema);
var ToLabFiles = mongoose.model('ToLabFiles', fileSchema);
var FromLabFiles = mongoose.model('FromLabFiles', fileSchema);
var ToXrayFiles = mongoose.model('ToXrayFiles', fileSchema);
var FromXrayFiles = mongoose.model('FromXrayFiles', fileSchema);
var ToPharmacyFiles = mongoose.model('ToPharmacyFiles', fileSchema);
var SavedFiles = mongoose.model('SavedFiles', fileSchema);

module.exports = {
    AtAdmissionFiles : AtAdmissionFiles,
    ToLabFiles : ToLabFiles,
    FromLabFiles : FromLabFiles,
    ToXrayFiles : ToXrayFiles,
    FromXrayFiles : FromXrayFiles,
    ToPharmacyFiles : ToPharmacyFiles,
    SavedFiles : SavedFiles 
};

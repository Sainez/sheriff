var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');
var app = express();


  // enable pre-flight






var users = require('./controllers/users.js');
var files = require('./controllers/files.js');
var stats = require('./controllers/stats.js');







// DB Config
var db = require('./config/keys').MongoURI;

// Connect to Mongo 

mongoose.connect(db, { useNewUrlParser: true } )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log("Cannot connect to MongoDB!!"));


// Passport Config
require('./config/passport')(passport);

// ------------ Global ----------------
app.locals = {
    
    superClinician : [ { firstName : "Sainez", surname : "Amon", lastName : "Kimutai", username : "@sainez_sainez", userNo : "000002", nationalId : "00000000", gender : "male", phone : "+254 718 896 779", specialize : "SuperUser", profNo : "101010", mail : "sainez@kimsweb.co.ke", password : '573fcc62ae45988da88a492d0e15b5c01c53cc94f5a1d7aed95bb1208a8862f6e57164f42b98d7f8dbe8f989d24f7476e351b955a29d77af77a74cd677ce9bbc' } ], // Clinical Users
    superAdmin : [ { firstName : "Sainez", surname : "Amon", lastName : "Kimutai", username : "@sainez_sainez", userNo : "000001",  nationalId : "00000000", gender : "male", phone : "+254 718 896 779", department : "SuperUser", officeNo : "101010", mail : "sainez@kimsweb.co.ke", password : '573fcc62ae45988da88a492d0e15b5c01c53cc94f5a1d7aed95bb1208a8862f6e57164f42b98d7f8dbe8f989d24f7476e351b955a29d77af77a74cd677ce9bbc' } ], // Admin Users
    
    databaseCLI : [],
    databaseADM : [ ],
    
    databaseONE : [], // Files From Admission to Examination
    databaseTWO : [], // Files from Examination to Laboratory
    databaseTHREE : [], // Files from Laboratory back to Examination
    databaseFOUR : [], // Files from Examination to Xray
    databaseFIVE : [], // Files from Xray back to Examination
    databaseSIX : [], // Files to Pharmacy
    databaseSEVEN : [], // Files archieved
    activeONE : [], // Active File In Examination from Admission
    activeTWO : [], // Active file in Laboratory
    activeTHREE : [], // active file in Xray
    activeFOUR : [], // active file in Pharmacy
    activeMED : [], // Open file in Med admin
    activeUSER : [], // Open User info
};


// Controllers
users(app);
files(app);
stats(app);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());





//Static files
app.use(express.static(path.join(__dirname, '/public')));

// 


app.use(cors());

//Get all Routes
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


 
//listen to port
app.listen(process.env.PORT || 8040);
console.log('Running Port 8040....');
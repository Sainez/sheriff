var cors = require('cors');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});


// Load Models
var ClinicianUser = require('../models/User').ClinicianUser;
var AdminUser = require('../models/User').AdminUser;


// ============================================//

module.exports = function(app, io){
    app.use(cors({
        credentials : true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
   

    var databaseONE = app.locals.databaseONE;
    var databaseTWO = app.locals.databaseTWO;
    var databaseTHREE = app.locals.databaseTHREE;
    var databaseFOUR = app.locals.databaseFOUR;
    var databaseFIVE = app.locals.databaseFIVE;
    var databaseSIX = app.locals.databaseSIX;
    var databaseSEVEN = app.locals.databaseSEVEN;
    var activeMED = app.locals.activeMED;
    var activeUSER = app.locals.activeUSER;
    
// Monitor

setInterval(() =>{

    io.emit('/monitor',{
        fromAdm     : databaseONE.length,
        toLab       : databaseTWO.length,
        fromLab     : databaseTHREE.length,
        toXray      : databaseFOUR.length,
        fromXray    : databaseFIVE.length,
        toPharmacy  : databaseSIX.length,
        archived    : databaseSEVEN.length
    });

}, 1000);




    


// Medical Database
setInterval(() =>{

    io.emit('/medicaldb',{
        archivednumber  : databaseSEVEN.length,
        archivedfiles   : databaseSEVEN
    });

}, 1000);

//====== Opening medical file =======
app.post('/openmedical', cors(), urlencodedParser, function(req, res){
        
    activeMED = activeMED.filter(function(){
        return false;
    });   

    for (var i = 0; i < databaseSEVEN.length; i++){
        if ( req.body.patientNo == databaseSEVEN[i].patientNo ) {

            req.body.name = databaseSEVEN[i].name;
            req.body.patientNo = databaseSEVEN[i].patientNo;
            req.body.age = databaseSEVEN[i].age;
            req.body.gender = databaseSEVEN[i].gender;
            req.body.signs = databaseSEVEN[i].signs;
            req.body.tests = databaseSEVEN[i].tests;
            req.body.results = databaseSEVEN[i].results;
            req.body.dx = databaseSEVEN[i].dx;

            activeMED.push(req.body);             
            res.json(activeMED);

        }
    }            
   
});  


// Med oN reload
app.delete('/medonreload', cors(), function(req, res){
       
    activeMED = activeMED.filter(function(){
        return false;
    });

});


// Delete Medical
app.delete('/deletemedical', cors(), function(req, res){
       
    for(var i=0; i < databaseSEVEN.length; i++){
        if (activeMED[0].patientNo == databaseSEVEN[i].patientNo){

            databaseSEVEN.splice(i, 1);

            activeMED = activeMED.filter(function(){
                return false;
            });

            res.json(databaseSEVEN);
        }
    } 

});






//// ========================== User Stats ===================================

// User Database

setInterval(() =>{

    ClinicianUser.find({})
    .then(cliUser => {

        AdminUser.find({})
        .then(admUser =>{

            io.emit('/userdb',{
                clinician           : cliUser.length,
                admin               : admUser.length,
                clinicianprofiles   : cliUser,
                adminprofiles       : admUser
            });

        })
        .catch(err => console.log(err));

    })
    .catch(err => console.log(err));



}, 1000);   








//====== Opening Clinician Profile =======
app.post('/openuserclinician', cors(), urlencodedParser, function(req, res){
        
    activeUSER = activeUSER.filter(function(){
        return false;
    });

    ClinicianUser.findOne({userNo : req.body.userNo})
        .then(user =>{

            req.body.name = user.firstName + ' ' + user.surname + ' ' + user.lastName;
            req.body.userNo = user.userNo;
            req.body.nationalId = user.nationalId;
            req.body.gender = user.gender;
            req.body.phone = user.phone;
            req.body.specialize = user.specialize;
            req.body.profNo = user.profNo;
            req.body.mail = user.mail;

            activeUSER.push(req.body);             
            res.json(activeUSER);

        })
        .catch(err => console.log(err));
   
});     


//====== Opening Admin Profile =======
app.post('/openuseradmin', cors(), urlencodedParser, function(req, res){
        
    activeUSER = activeUSER.filter(function(){
        return false;
    });
    
    AdminUser.findOne({userNo : req.body.userNo})
        .then(user =>{

            req.body.name = user.firstName + ' ' + user.surname + ' ' + user.lastName;
            req.body.userNo = user.userNo;
            req.body.nationalId = user.nationalId;
            req.body.gender = user.gender;
            req.body.phone = user.phone;
            req.body.specialize = user.specialize;
            req.body.profNo = user.profNo;
            req.body.mail = user.mail;

            activeUSER.push(req.body);             
            res.json(activeUSER);

        })
        .catch(err => console.log(err));
   
});  


// User on reload
app.delete('/useronreload', cors(), function(req, res){
       
    activeUSER = activeUSER.filter(function(){
        return false;
    });

});


// Delete Clinician
app.delete('/deleteusercli', cors(), function(req, res){

    ClinicianUser.deleteOne({userNo : activeUSER[0].userNo})
        .then( data => {    
                activeUSER = activeUSER.filter(function(){
                    return false;
                });
    
                res.json(data);

        })
        .catch(err => console.log(err));

});

// delete Admin
app.delete('/deleteuseradm', cors(), function(req, res){

    AdminUser.deleteOne({userNo : activeUSER[0].userNo})
        .then( data => {      
                activeUSER = activeUSER.filter(function(){
                    return false;
                });
    
                res.json(data);
        })
        .catch(err => console.log(err));

});





//----------------------------------------------//

};

//=============================================//
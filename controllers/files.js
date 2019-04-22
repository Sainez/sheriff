var cors = require('cors');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
'use strict';
var crypto = require('crypto');




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

    var activeONE = app.locals.activeONE;
    var activeTWO = app.locals.activeTWO;
    var activeTHREE = app.locals.activeTHREE;
    var activeFOUR = app.locals.activeFOUR;

    


// Admittion Patient
    app.post('/admission', cors(), urlencodedParser, function(req, res){
        req.body.patientNo = crypto.randomBytes(5).toString('hex');
        databaseONE.push(req.body);
        res.json(databaseONE);
        io.emit('/admission', databaseONE); 
    }); 




//====== Opening PatientFile from Admission =======
    app.post('/openadmissionfile', cors(), urlencodedParser, function(req, res){
        if (activeONE[0] == null ) {
      
            
            for (var i = 0; i < databaseONE.length; i++){
                if ( req.body.patientNo == databaseONE[i].patientNo ) {

                    req.body.name = databaseONE[i].firstName + ' ' + databaseONE[i].lastName;
                    req.body.patientNo = databaseONE[i].patientNo;
                    req.body.age = databaseONE[i].age;
                    req.body.gender = databaseONE[i].gender;
     
                    activeONE.push(req.body);             
                    res.json(activeONE);
                    io.emit('/updateexamform', activeONE);

                }
            }            
        } else{
            res.status(403).send('Another file is already Open !');
        }
    });     

   

// ==== On Examination Reload =========

app.delete('/examinationreload', cors(), function(req, res){
       
    activeONE = activeONE.filter(function(){
        return false;
    });
    io.emit('/updateexamform', activeONE);
    io.emit('/admission', databaseONE);
    io.emit('/listfromlab', databaseTHREE);
    io.emit('/listfromxray', databaseFIVE);

});

//======= Delete File =========

app.delete('/deletefile', cors(), function(req, res){

    for(var i=0; i < databaseONE.length; i++){
        if (activeONE[0].patientNo == databaseONE[i].patientNo){

            databaseONE.splice(i, 1);

            activeONE = activeONE.filter(function(){
                return false;
            });

            res.json(databaseONE);
            io.emit('/updateexamform', activeONE);
            io.emit('/admission', databaseONE);
        }
    }        

});


//======= To Lab =========

app.post('/tolab', cors(), function(req, res){

    req.body.name = activeONE[0].name;
    req.body.patientNo = activeONE[0].patientNo;
    req.body.age = activeONE[0].age;
    req.body.gender = activeONE[0].gender;

    databaseTWO.push(req.body);
    

    for(var i=0; i < databaseONE.length; i++){
        if (activeONE[0].patientNo == databaseONE[i].patientNo){

            databaseONE.splice(i, 1);

            activeONE = activeONE.filter(function(){
                return false;
            });
            
        }
    } 

    res.json(databaseTWO);
    io.emit('/updateexamform', activeONE);
    io.emit('/admission', databaseONE);
    io.emit('/listtolab', databaseTWO);
    

});



//====== Opening lab files from Exam =======
app.post('/openlabfile', cors(), urlencodedParser, function(req, res){
    if (activeTWO[0] == null ) {
  
        
        for (var i = 0; i < databaseTWO.length; i++){
            if ( req.body.patientNo == databaseTWO[i].patientNo ) {

 
                activeTWO.push(databaseTWO[i]);           
                res.json(activeTWO);
                io.emit('/updatelabform', activeTWO);
            }
        }            
    } else{
        res.status(403).send('Another file is already Open !');
    }
});  


// ==== On Lab Reload =========

app.delete('/labreload', cors(), function(req, res){
       
    activeTWO = activeTWO.filter(function(){
        return false;
    });
    io.emit('/updatelabform', activeTWO);
    io.emit('/listtolab', databaseTWO);

});

//======= From Lab To Exam =========

app.post('/labtoexam', cors(), function(req, res){

    req.body.name = activeTWO[0].name;
    req.body.patientNo = activeTWO[0].patientNo;
    req.body.age = activeTWO[0].age;
    req.body.gender = activeTWO[0].gender;
    req.body.signs = activeTWO[0].signs;
    req.body.tests = activeTWO[0].tests;

    databaseTHREE.push(req.body);
    

    for(var i=0; i < databaseTWO.length; i++){
        if (activeTWO[0].patientNo == databaseTWO[i].patientNo){

            databaseTWO.splice(i, 1);

            activeTWO = activeTWO.filter(function(){
                return false;
            });
        }
    } 

    res.json(databaseTHREE);
    io.emit('/listtolab', databaseTWO);
    io.emit('/updatelabform', activeTWO);
    io.emit('/listfromlab', databaseTHREE);

});


//====== Opening files from Lab =======
app.post('/openfilefromlab', cors(), urlencodedParser, function(req, res){
    if (activeONE[0] == null ) {
  
        
        for (var i = 0; i < databaseTHREE.length; i++){
            if ( req.body.patientNo == databaseTHREE[i].patientNo ) {

 
                activeONE.push(databaseTHREE[i]);             
                res.json(activeONE);
                io.emit('/updateexamform', activeONE);

            }
        }            
    } else{
        res.status(403).send('Another file is already Open !');
    }
});  
















//======= To Xray =========
app.post('/toxray', cors(), function(req, res){

    req.body.name = activeONE[0].name;
    req.body.patientNo = activeONE[0].patientNo;
    req.body.age = activeONE[0].age;
    req.body.gender = activeONE[0].gender;

    databaseFOUR.push(req.body);
    res.json(databaseFOUR); 
    
    for(var i=0; i < databaseONE.length; i++){
        if (activeONE[0].patientNo == databaseONE[i].patientNo){

            databaseONE.splice(i, 1);

            activeONE = activeONE.filter(function(){
                return false;
            });
        }
    }

    io.emit('/updateexamform', activeONE);
    io.emit('/admission', databaseONE);
    io.emit('/listtoxray', databaseFOUR);

});

//====== Opening Xray files from Exam =======
app.post('/openxrayfile', cors(), urlencodedParser, function(req, res){
    if (activeTHREE[0] == null ) {
  
        
        for (var i = 0; i < databaseFOUR.length; i++){
            if ( req.body.patientNo == databaseFOUR[i].patientNo ) {

 
                activeTHREE.push(databaseFOUR[i]);             
                res.json(activeTHREE);
                io.emit('/updatexrayform', activeTHREE);

            }
        }            
    } else{
        res.status(403).send('Another file is already Open !');
    }
});  


// ==== On Xray Reload =========

app.delete('/xrayreload', cors(), function(req, res){
       
    activeTHREE = activeTHREE.filter(function(){
        return false;
    });
    io.emit('/updatexrayform', activeTHREE);
    io.emit('/listtoxray', databaseFOUR);

});

//======= From Xray To Exam =========

app.post('/xraytoexam', cors(), function(req, res){

    req.body.name = activeTHREE[0].name;
    req.body.patientNo = activeTHREE[0].patientNo;
    req.body.age = activeTHREE[0].age;
    req.body.gender = activeTHREE[0].gender;
    req.body.signs = activeTHREE[0].signs;
    req.body.tests = activeTHREE[0].tests;

    databaseFIVE.push(req.body);
    

    for(var i=0; i < databaseFOUR.length; i++){
        if (activeTHREE[0].patientNo == databaseFOUR[i].patientNo){

            databaseFOUR.splice(i, 1);

            activeTHREE = activeTHREE.filter(function(){
                return false;
            });
        }
    } 

    res.json(databaseFIVE);
    io.emit('/listtoxray', databaseFOUR);
    io.emit('/updatexrayform', activeTHREE);
    io.emit('/listfromxray', databaseFIVE);

});



//====== Opening files from Xray =======
app.post('/openfilefromxray', cors(), urlencodedParser, function(req, res){
    if (activeONE[0] == null ) {
  
        
        for (var i = 0; i < databaseFIVE.length; i++){
            if ( req.body.patientNo == databaseFIVE[i].patientNo ) {

 
                activeONE.push(databaseFIVE[i]);             
                res.json(activeONE);
                io.emit('/updateexamform', activeONE);

            }
        }            
    } else{
        res.status(403).send('Another file is already Open !');
    }
});  




















//======= To pharmacy =========
app.post('/topharmacy', cors(), function(req, res){

    req.body.name = activeONE[0].name;
    req.body.patientNo = activeONE[0].patientNo;
    req.body.age = activeONE[0].age;
    req.body.gender = activeONE[0].gender;

    databaseSIX.push(req.body);
    

    for(var i=0; i < databaseONE.length; i++){
        if (activeONE[0].patientNo == databaseONE[i].patientNo){

            databaseONE.splice(i, 1);

            activeONE = activeONE.filter(function(){
                return false;
            });
        }
    }

    res.json(databaseSIX);
    io.emit('/updateexamform', activeONE);
    io.emit('/admission', databaseONE);
    io.emit('/listpharmacy', databaseSIX);

          
});


//======= To pharm =========
app.post('/topharm', cors(), function(req, res){

    req.body.name = activeONE[0].name;
    req.body.patientNo = activeONE[0].patientNo;
    req.body.age = activeONE[0].age;
    req.body.gender = activeONE[0].gender;
    req.body.signs = activeONE[0].signs;
    req.body.tests = activeONE[0].tests;
    req.body.results = activeONE[0].results;

    databaseSIX.push(req.body);
    res.json(databaseSIX);
    io.emit('/listpharmacy', databaseSIX);
    

    for(var i=0; i < databaseTHREE.length; i++){
        if (activeONE[0].patientNo == databaseTHREE[i].patientNo){

            databaseTHREE.splice(i, 1);

            activeONE = activeONE.filter(function(){
                return false;
            });
            io.emit('/listfromlab', databaseTHREE);
            io.emit('/updateexamform', activeONE);
            
        }
    }


    for(var i=0; i < databaseFIVE.length; i++){
        if (activeONE[0].patientNo == databaseFIVE[i].patientNo){

            databaseFIVE.splice(i, 1);

            activeONE = activeONE.filter(function(){
                return false;
            });
            io.emit('/listfromxray', databaseFIVE);
            io.emit('/updateexamform', activeONE);
        }
    }

    
          
});


//====== Opening Pharmacy File =======
app.post('/openpharmacyfile', cors(), urlencodedParser, function(req, res){
    if (activeFOUR[0] == null ) {
  
        
        for (var i = 0; i < databaseSIX.length; i++){
            if ( req.body.patientNo == databaseSIX[i].patientNo ) {

 
                activeFOUR.push(databaseSIX[i]);             
                res.json(activeFOUR);
                io.emit('/updatepharmacyform', activeFOUR);

            }
        }            
    } else{
        res.status(403).send('Another file is already Open !');
    }
});  


// ==== On Pharmacy Reload =========

app.delete('/pharmacyreload', cors(), function(req, res){
       
    activeFOUR = activeFOUR.filter(function(){
        return false;
    });
    io.emit('/updatepharmacyform', activeFOUR);
    io.emit('/listpharmacy', databaseSIX);

});

//======= Save File =========

app.post('/savefile', cors(), function(req, res){

    for(var i=0; i < databaseSIX.length; i++){
        if (activeFOUR[0].patientNo == databaseSIX[i].patientNo){

            req.body.name = activeFOUR[0].name;
            req.body.patientNo = activeFOUR[0].patientNo;
            req.body.age = activeFOUR[0].age;
            req.body.gender = activeFOUR[0].gender;
            req.body.signs = activeFOUR[0].signs;
            req.body.tests = activeFOUR[0].tests;
            req.body.results = activeFOUR[0].results;
            req.body.dx = activeFOUR[0].dx;

            databaseSEVEN.push(req.body);
            databaseSIX.splice(i, 1);

            activeFOUR = activeFOUR.filter(function(){
                return false;
            });

            res.json(databaseSEVEN);
            io.emit('/updatepharmacyform', activeFOUR);
            io.emit('/listpharmacy', databaseSIX);
        }
    } 

});









//----------------------------------------------//

};

//=============================================//
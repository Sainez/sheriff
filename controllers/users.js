var bodyParser = require('body-parser');
var passport = require('passport');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var jwt = require('jsonwebtoken');
'use strict';
var crypto = require('crypto');
const bcrypt = require('bcrypt');
const saltRounds = 10;


// Load Models
var ClinicianUser = require('../models/User').ClinicianUser;
var AdminUser = require('../models/User').AdminUser;

// ============================================//

module.exports = function(app){
    
    var cors = require('cors');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    var secret = 'thenewsheriff'; 

    var superClinician = app.locals.superClinician;
    var superAdmin = app.locals.superAdmin;


//=== Check Password ===
var checkPassword = function(password){
    var salt = 'da7b43055355d7ac362188d88330c79d';
    var hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');   
    return hash;
};

//setting cors

app.use(cors(), function(req, res) {
    

   
});

var whitelist = ['https://sheriffamon.herokuapp.com/', 'http://sheriffamon.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//------------------- Clinician Registration --------------------------------------
app.post('/regclinician', urlencodedParser, function(req, res){ 

    
    ClinicianUser.findOne({ mail : req.body.mail })
    .then(user => {
        if (user) {
            res.status(401).send("Email Already Exist !");
        }else{
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                if (err) throw err;

                req.body.password = hash;
                req.body.userNo = crypto.randomBytes(3).toString('hex');
                ClinicianUser(req.body).save().then(user => {
                    res.json(user);
                }).catch(err => console.log(err));
              });
             

            
        }
    })

});

//------------------------Clinician Login--------------------------------------
app.post('/logclinician', cors(corsOptions), urlencodedParser, function(req, res, next){

    if (req.body){
   
    var user = new Array;
    user.mail = req.body.mail;
    
    user.password = checkPassword(req.body.password);

    if ( user.mail === superClinician[0].mail && user.password === superClinician[0].password){                     
        
        var token = jwt.sign({
             mail : this.mail, mail : this.mail ,pass: this.password},
            secret, {expiresIn : 604800});
        var signedUser = superClinician[0].firstName + ' ' + superClinician[0].surname + ' ' + superClinician[0].lastName;
        
      
        
        res.status(200).json({
                    signedUser : signedUser,
                    token : token
                    })			 	
        
    }else{
        if ( user.mail === superClinician[0].mail){
        
            res.status(401).json("Wrong Password !");
            
        }else{

            //passport
            passport.authenticate('clinician-local', (err, user, info) => {

                if (err) {
                   res.status(401).json(err);
                   
                }
                if (user) {
                   var token = jwt.sign({
                       mail : user.mail, mail : user.mail ,pass: user.password},
                       secret, {expiresIn : 604800});
                   var signedUser = user.firstName + ' ' + user.surname + ' ' + user.lastName;
                  
                   res.status(200).json({
                              signedUser : signedUser,
                              token : token
                              })	
                }
                else{
                   res.status(401).json(info.message);
                }
            }) ( req, res, next);



        }
    }


}


});

//----------------- Admin Registration -----------------------------//
app.post('/regadmin', urlencodedParser, function(req, res){

    AdminUser.findOne({ mail : req.body.mail })
    .then(user => {
        if (user) {
            res.status(401).send("Email Already Exist !");
        }else{
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                if (err) throw err;

                req.body.password = hash;
                req.body.userNo = crypto.randomBytes(3).toString('hex');
                AdminUser(req.body).save().then(user => {
                    res.json(user);
                }).catch(err => console.log(err));
              });
        }
    })

});


//----------------- Admin Login -----------------------------//
app.post('/logadmin', urlencodedParser, function( req, res, next){

    

    if (req.body){ 

        var user = new Array;
        user.mail = req.body.mail;
        var noUser = true;    
              
        user.password = checkPassword(req.body.password);
        if ( user.mail === superAdmin[0].mail && user.password === superAdmin[0].password){                     
            
            var token = jwt.sign({
                mail : this.mail, mail : this.mail ,pass: this.password},
               secret, {expiresIn : 604800});
            var signedUser = superAdmin[0].firstName + ' ' + superAdmin[0].surname + ' ' + superAdmin[0].lastName;
            
            var noUser = false;
            
            res.status(200).send({
                        signedUser : signedUser,
                        token : token
                        })			 	
            
        }
        else{
            if ( user.mail === superAdmin[0].mail){
                var noUser = false;
                res.status(401).send("Wrong Password !");
                
            }else{

                // Passport
                passport.authenticate('admin-local', (err, user, info) => {

                    if (err) {
                       res.status(401).send(err);
                       
                    }
                    if (user) {
                       var token = jwt.sign({
                           mail : user.mail, mail : user.mail ,pass: user.password},
                           secret, {expiresIn : 604800});
                       var signedUser = user.firstName + ' ' + user.surname + ' ' + user.lastName;
                      
                       res.status(200).send({
                                  signedUser : signedUser,
                                  token : token
                                  })	
                    }
                    else{
                       res.status(401).send(info.message);
                    }
                }) ( req, res, next);
    

            }

        }
    } 

});




//----------------------------------------------//

};

//=============================================//
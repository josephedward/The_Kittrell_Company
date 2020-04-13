require('dotenv').config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./'))
const path = require("path");
var nodemailer = require('nodemailer');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) /

app.get('/', function(req,res){
    res.sendFile('index.html', { root: path.join(__dirname, './') });
});

app.post('/contact', function(req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thekittrellcompany@gmail.com',
      pass: process.env.test
    }
  });
  

  var mailOptions = {
    from: 'thekittrellcompany@gmail.com',
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

  });

});


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  


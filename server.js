const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/sendMail', function (req, res) {
    sendMail(req.body)
    res.end(JSON.stringify("Mail sent successfully"));
 })
 
 const server = app.listen(5000, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Sendmail app listening at", host, port)
 })

let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
       user: 'fakevbp11@gmail.com',
       pass: 'vinod.panchal@1311'
    }
});

const sendMail = (body) => {

    const data = {
        from: 'fakevbp11@gmail.com',
        to: body.email,
        name: body.name,
        phone:body.phone,
        subject: 'inquiry notification',
        message:'',
        html: `<h3>Name : ${body.name}</h3> <br> <h3>Phone Number : ${body.phone}</h3> <br> <p> Emaild id: ${body.email}</p> <br>  <p> message: ${body.message}</p>`,
        
    };

    transport.sendMail(data, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });

};
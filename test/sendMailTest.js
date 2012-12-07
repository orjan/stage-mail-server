var should = require('should'),
    nodemailer = require("nodemailer");

function sendMail(done) {
    var smtpTransport = nodemailer.createTransport("SMTP", {
        host: "localhost",
        secureConnection: false,
        port: 9025
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Fred Foo √ <foo@blurdybloop.com>", // sender address
        to: "bar@blurdybloop.com, baz@blurdybloop.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world ✔", // plaintext body
        html: "<b>Hello world ✔</b>" // html body
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
        done();

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}


describe("Send mail", function() {
    before(function(done) {
        done();
    });

    it("should be able to send mail", function(done) {
        sendMail(done);
    });
});
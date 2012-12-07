var smtp = require('smtp-protocol'),
    mongoose = require('mongoose');
    Email = require('./models/email.js');

var MailParser = require('mailparser').MailParser,
    mailparser = new MailParser();

mailparser.on("end", function(mail_object){
    console.log(mail_object);

    new Email(mail_object).save(function(err, email) {
        console.log("Email saved:", err, email);
    });
});

var server = smtp.createServer(function (req) {
    req.on('message', function (stream, ack) {
        stream.pipe(mailparser);
        ack.accept();
    });
});

mongoose.connect('mongodb://localhost/stage-smtp', {}, function() {
    server.listen(9025);
});


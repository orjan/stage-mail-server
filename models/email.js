var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var address = {
    address: String,
    name: String
};

var emailSchema = new Schema({
    from: address,
    to: [address],
    subject: String,
    text: String,
    html: String,
    priority: String,
    headers: {},
    raw: String
});

module.exports = mongoose.model('email', emailSchema);

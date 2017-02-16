var db = require('../../util/db');

module.exports = function (req, res) {
     // Fetch all registered device tokens
    var devices = db.read();

    // Send to client
    res.send({ devices: devices });
};
var db = require('../../util/db');

module.exports = function (req, res) {
    // Get device token
    var device = req.params.device;

    // Store token in in-memory persistence
    db.write(device);

    // Device registered successfully
    res.send({ success: true });
};
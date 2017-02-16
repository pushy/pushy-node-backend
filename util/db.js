// In-memory persistence for simplicity
var data = [];

exports.write = function(item) {
    // Avoid duplicate items
    if (data.indexOf(item) === -1) {
        data.push(item);
    }
};

exports.read = function() {
    // Expose data externally
    return data;
};
var api = require('./lib/api');

// Log system date & time
console.log('[System]', 'Initializing on ' + new Date().toUTCString());

// Initialize API
api.initialize();
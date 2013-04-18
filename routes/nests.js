
/*
 * GET nest listing.
 */
nest = require('unofficial-nest-api');

var username = process.argv[2];
var password = process.argv[3];

nest.login(username, password, function (nil, data) {
	if (!data) {
        console.log('Nest Login failed.');
        process.exit(1);
        return;
    }
	console.log('Nest Logged in.');
});

exports.status = function(req, res){
	
	nest.fetchStatus(function (data) {
    	var devices = [];

        for (var deviceId in data.device) {
            if (data.device.hasOwnProperty(deviceId)) {
                var device = data.shared[deviceId];
                devices.push(device);
            }
        }

        res.send(devices);
    });
	
};

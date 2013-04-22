
/*
 * GET structures.
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

exports.list = function(req, res){

    nest.fetchStatus(function (data) {
        var structures = [];

        for (var structureId in data.structure) {
            if (data.structure.hasOwnProperty(structureId)) {
                var structure = data.structure[structureId];
                structures.push(structure);
            }
        }

        res.send(structures);
    });
	
};

exports.show = function(req, res){

    nest.fetchStatus(function (data) {

        if (data.structure.hasOwnProperty(req.params.structure)) {
            res.send(data.structure[req.params.structure]);
        } else {
            console.log('Cannot find structure: ' + req.params.structure);
            res.send({'error':'Cannot find structure: ' + req.params.structure});
        }
        
    });
    
};
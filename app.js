
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , nests = require('./routes/nests')
  , http = require('http')
  , path = require('path');

var app = express();

// app.configure(function(){
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'jade');
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(express.static(__dirname + '/public'));
//   app.use(app.router);
// });

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/api/nests', nests.status);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

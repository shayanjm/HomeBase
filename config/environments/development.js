var express = require('express'),
    mongoose = require('mongoose'),
    config = require('../config'),
    rest = require('mers')({uri: config.development.database.uri}),
    path = require('path');

// mongoose.connect(config.development.database.uri);
var User;
function setupRest() {

    // Initialize Models
    User = require('../../app/models/user')(rest.mongoose);
}
module.exports = function (app) {
    app.configure('development', function () {
        app.use(function staticsPlaceholder(req, res, next) {
            return next();
        });



        app.set('port', process.env.PORT || 9000);
        app.set('views', path.join(app.directory, '/app'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use('/api', rest.rest());

        app.use(function middlewarePlaceholder(req, res, next) {
          return next();
        });

        app.use(app.router);
        app.use(express.errorHandler());
        setupRest();
    });
};

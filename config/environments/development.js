var express = require('express'),
    mongoose = require('mongoose'),
    config = require('../config'),
    path = require('path');

module.exports = function (app) {
    app.configure('development', function () {
        app.use(function staticsPlaceholder(req, res, next) {
            return next();
        });
        mongoose.connect(config.development.database.uri, function(){
            console.log('Database successfully connected to: ' + config.development.database.uri);
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

        app.use(function middlewarePlaceholder(req, res, next) {
          return next();
        });

        app.use(app.router);
        app.use(express.errorHandler());
    });
};

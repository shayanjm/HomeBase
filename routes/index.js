var passport = require('passport');

module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    });

    app.post('/login',
	passport.authenticate('local'),
	function(req, res) {
		res.send('Welcome ' + req.user.username + '.');
	});
};



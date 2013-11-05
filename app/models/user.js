module.exports = function(mongoose) {
    var bcrypt = require('bcrypt');
    var SALT_WORK_FACTOR = 10;
    var Schema = mongoose.Schema;

    // User Schema
    var UserSchema = new Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        tasks: [{ type: Schema.Types.ObjectId, ref: 'task' }]
    });

    // Before the save of any new User, do this:
    UserSchema.pre('save', function (next) {
        var user = this;

        if(!user.isModified('password')) return next();

        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    });

    // This should probably be split into a new Controller. It essentially is authentication
    UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    });
    };

    // Save a test fixture
    var User = mongoose.model('user', UserSchema);
    return User;
};

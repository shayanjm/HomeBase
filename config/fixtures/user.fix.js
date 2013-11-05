module.exports = function (done, mongoose){
    var User = require('../../app/models/user')(mongoose);

    // Let's create a few users.

    // User 1 -> Regular user with a safe.
    var user1 = new User({ username: "Test1", password: "Test1", email: "test@test.test" });
    user1.save(function(err){
        if(err){
            console.log("ERROR WITH SAVING FIXTURE:" + err);
            done(err);
        }
        else {
            console.log("Successfully saved user: " + user1.username);
            done();
        }
    });

    var user2 = new User({ username: "ShayanTest2", password: "ShayanTest2", email: "shayan@shayan.test" });
    user2.save(function(err){
        if(err){
            console.log("ERROR WITH SAVING FIXTURE:" + err);
            done(err);
        }
        else {
            console.log("Successfully saved user: " + user2.username);
            done();
        }
    });

    var user3 = new User({ username: "ShayanTest3", password: "ShayanTest3", email: "shayan@shayan.test" });
    user3.save(function(err){
        if(err){
            console.log("ERROR WITH SAVING FIXTURE:" + err);
            done(err);
        }
        else {
            console.log("Successfully saved user: " + user3.username);
            done();
        }
    });

};

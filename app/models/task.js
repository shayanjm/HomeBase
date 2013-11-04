module.exports = function(mongoose) {
    var Schema = mongoose.Schema;

    // Task Schema
    var TaskSchema = new Schema({
        name: { type: String, required: true, unique: true },
        description: { type: String},
        estimatedIntervals: { type: int, required: true },
        completed : { type: boolean, required: true }
    });

    /*// Before the save of any new Task, do this:
    TaskSchema.pre('save', function (next) {
        var task = this;

    });*/

    // Save a test fixture
    var Task = mongoose.model('task', TaskSchema);

    return Task;
};
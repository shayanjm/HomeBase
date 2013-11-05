module.exports = function(mongoose) {
    var Schema = mongoose.Schema;

    // Task Schema
    var TaskSchema = new Schema({
        name: { type: String, required: true, unique: true },
        description: { type: String},
        estimatedIntervals: { type: Number, required: true },
        completed : { type: Boolean, required: true }
    });

    /*// Before the save of any new Task, do this:
    TaskSchema.pre('save', function (next) {
        var task = this;

    });*/

    var Task = mongoose.model('task', TaskSchema);

    return Task;
};

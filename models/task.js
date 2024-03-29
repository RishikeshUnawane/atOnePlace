// require the library
const mongoose = require('mongoose');

// creating Schema for Tasks
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
});


const Task = mongoose.model('Task', taskSchema);

// exporting the Schema
module.exports = Task;
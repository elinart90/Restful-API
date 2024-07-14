const mongoose = require('mongoose');



const workOutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    } 
}, { timestamps: true});

// module.exports = mongoose.model('Model', workOutSchema);
const WorkOut = mongoose.models.WorkOut || mongoose.model('WorkOut', workOutSchema);

module.exports = WorkOut;


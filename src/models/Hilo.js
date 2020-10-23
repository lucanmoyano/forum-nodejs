const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HiloSchema = new Schema({
    title: { type: String },
    content: { type: String },
    fec_pub: { type: Date, default: Date.now() },
    like: {type: Number, default:0},
    dislike: {type: Number, default:0},
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    fonts :[]
});

module.exports = mongoose.model('Hilo', HiloSchema);
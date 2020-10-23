const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: { type: String, default: 'Lucas' },
    avatar:{ type: String, default:'https://i.imgur.com/rhP4uXl.gif'},
    text: { type: String },
    date: { type: Date, default: Date.now() },
    like: { type: Number, default:0 },
    hilo: {
        type: Schema.Types.ObjectId,
        ref: 'Hilo'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Comment', CommentSchema);
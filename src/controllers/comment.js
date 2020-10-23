const Comment = require('../models/Comment');
const Hilo = require('../models/Hilo');

module.exports = {
    index: async (req, res, next) => {
        const comments = await Comment.find({});
        res.status(200).json(comments);
    },

    //Add comment in thread
    newComment: async (req, res, next) => {
        const { hiloId } = req.params;
        const newComment = new Comment(req.body);
   
        const hilo = await Hilo.findById(hiloId);
        console.log(hiloId)
        newComment.hilo = hilo;
        await newComment.save();
        hilo.comments.push(newComment);
        await hilo.save();
        res.status(200).json({Success: true});
    },

    //Get comment
    getComment: async (req, res, next) => {
        const { commentId } = req.params;
        const comment = await Comment.findById(commentId).populate('comments');;
        res.status(200).json(comment);
    },

    updateComment: async(req, res, next) => {
        const { commentId } = req.params;
        const newComment = req.body;
        await Comment.findByIdAndUpdate(commentId, newComment);
        res.status(200).json({Succes: true});
    },
    
    deleteComment: async(req, res, next) => {
        const { commentId } = req.params;
        await Comment.findByIdAndRemove(commentId);
        res.status(200).json({success: true});
    },

    newCommentInComment: async (req, res, next) => {
        const { commentId } = req.params;
        const newComment = new Comment(req.body);
        const comment = await Comment.findById(commentId);

        newComment.comments = comment;
        await newComment.save();
        comment.comments.push(newComment);
        await comment.save();
        res.status(200).json({Success: true});
    }, 



};
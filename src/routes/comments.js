const router = require('express-promise-router')();

const {
    index,
    newComment,
    getComment,
    updateComment,
    deleteComment,
    newCommentInComment
} = require('../controllers/comment'); //requiero las funciones del controlador

router.get('/', index);
router.post('/:hiloId', newComment);
router.get('/:commentId', getComment);
router.put('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);
router.post('/reply/:commentId', newCommentInComment);



module.exports = router;

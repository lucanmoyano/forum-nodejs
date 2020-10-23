/*const express = require('express)
    const router = express.Router();
*/
//const { Router } = require('express');
//const router = Router();
const router = require('express-promise-router')();

const {
    index,
    newHilo,
    getHilo,
    updateHilo,
    deleteHilo,
    getCommentThread
} = require('../controllers/hilo'); //requiero las funciones del controlador

router.get('/', index);
router.post('/', newHilo);
router.get('/:hiloId', getHilo);
router.put('/:hiloId', updateHilo);
router.delete('/:hiloId', deleteHilo);
router.get('/comments/:hiloId', getCommentThread);



module.exports = router;

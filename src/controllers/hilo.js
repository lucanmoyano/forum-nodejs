const Hilo = require('../models/Hilo');


module.exports = {

    index: async (req, res, next) => {
       // try{
            const hilos = await Hilo.find({});
            //throw new Error('Ocurrio un error')
            res.status(200).json(hilos);
        /*}catch (e) {
            console.log(e);
        }*/
    },

    newHilo: async (req, res, next) => {
        const newHilo = new Hilo(req.body);
        const hilo = await newHilo.save();
        res.status(200).json(hilo);
    },

    getHilo: async (req, res, next) => {
        const { hiloId } = req.params;
        const hilo = await Hilo.findById(hiloId);
        res.status(200).json(hilo);
    },

    updateHilo: async(req, res, next) => {
        const { hiloId } = req.params;
        const newHilo = req.body;
        await Hilo.findByIdAndUpdate(hiloId, newHilo);
        res.status(200).json({Succes: true});
    },
    
    deleteHilo: async(req, res, next) => {
        const { hiloId } = req.params;
        await Hilo.findByIdAndRemove(hiloId);
        res.status(200).json({success: true});
    },

    getCommentThread: async(req, res, next) =>{
        const { hiloId } = req.params;
        const hilo = await (await Hilo.findById(hiloId).populate({path:'comments', populate:{ path: 'comments'}}))
        
        res.status(200).json(hilo);
    }


};
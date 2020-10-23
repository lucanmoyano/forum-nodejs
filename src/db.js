const mongoose = require('mongoose');

//mongoose.set = ('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user:user@cluster0.uoe2h.mongodb.net/Foro-Prototype?retryWrites=true&w=majority', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));

//mongodb+srv://user:<password>@cluster0.uoe2h.mongodb.net/<dbname>?retryWrites=true&w=majority
//user:user
//pass:user
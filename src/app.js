const morgan = require('morgan');
const express = require('express');
//const mongoose = require('mongoose');

const app = express();
require('./db');

/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest-api-example', {
    useMongoClient: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));*/

//settings
app.set('port', process.env.PORT || 3000 );

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


//Enable Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

//routes
app.use('/hilo',require('./routes/hilos'));
app.use('/comment',require('./routes/comments'));

//start server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
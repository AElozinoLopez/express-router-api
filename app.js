const express = require('express');
const Joi = require('joi');
const log = require('./midlewares/logger');
const { userRouter, userCourse} = require('./routes');
require('dotenv').config();
const auth = require('./midlewares/auth');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const debug = require('debug')('app:startup');


const app = express();

// middlewares
app.use(helmet());
//setting morgan to run in development environment only
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}
//End of morgan setting

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({extended: true})); // For parsing form data
app.use(log);
app.use(auth);
// app.use(express.static('public')); // this has to be commented out for pug to work. NB to see this in browser, use localhost:3000/index.html or /readme.txt
// routes middleware
app.use('/api/v1/', userRouter);
app.use('/api/v1/', userCourse);

console.log('Application Name:' + config.get('name'));

console.log('Mail server host:' + config.get('mail.host'));

console.log('APP Password:' + config.get('db.password'));


const PORT = process.env.PORT || 3000;


// Home route
app.get('/api/v1/', (req, res) => {
    // res.send("Una well done oooo"); // this line is replaced by pug templating engine as below:
    res.render('index', {title: 'My oh My Express App', message: 'Hola!'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


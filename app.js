const express = require('express');
const log = require('./midlewares/logger');
const { userRouter } = require('./routes');
require('dotenv').config();
const auth = require('./midlewares/auth');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();

// middlewares
app.use(helmet());
//setting morgan to run in development environment only
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
//End of morgan setting
app.use(express.json());
app.use(express.urlencoded({extended: true})); // For parsing form data
app.use(log);
app.use(auth);
app.use(express.static('public'));
// routes middleware
app.use('/api/v1/', userRouter);


const PORT = process.env.PORT || 3000;


// Home route
app.get('/api/v1/', (req, res) => {
    res.send("Una well done oooo");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const log = require('./midlewares/logger');
const { userRouter } = require('./routes');
require('dotenv').config();
const auth = require('./midlewares/auth');


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); // For parsing form data
app.use(log);
app.use(auth);
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


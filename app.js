const express = require('express');
const log = require('./logger.js')
const { userRouter } = require('./routes');
require('dotenv').config();


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); // For parsing form data
app.use(log)
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


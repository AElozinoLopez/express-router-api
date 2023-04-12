const express = require('express');

const app = express();

require('dotenv').config();

const { userRouter } = require('./routes');

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// routes middleware
app.use('/api/v1/', userRouter);


// Home route
app.get('/api/v1/', (req, res) => {
    res.send("Una well done oooo");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


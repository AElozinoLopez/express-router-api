const express = require('express');
const Joi = require('joi');

// create router
const userRouter = express.Router();


// GET / Home page (create it)
userRouter.get('/users', (req, res) => {
    res.status(200).send('Hello World! From the express_routes app!');
});

module.exports = userRouter;
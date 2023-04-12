const express = require('express');

// create router
const userRouter = express.Router();

// GET / Home page (create it)
userRouter.get('/users', (req, res) => {
    res.status(200).send('Hello World! From the express_routes app!');
});

userRouter.get('/users/courses', (req, res) => {
    res.send([1, 2, 3, 4]);
})

userRouter.get('/users/courses/:id', (req, res) => {
    res.send(req.params.id);
})

module.exports = userRouter;
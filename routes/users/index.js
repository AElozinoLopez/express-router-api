const express = require('express');
const Joi = require('joi');

// create router
const userRouter = express.Router();

const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'}
];

// GET / Home page (create it)
userRouter.get('/users', (req, res) => {
    res.status(200).send('Hello World! From the express_routes app!');
});

userRouter.get('/users/courses', (req, res) => {
    res.send(courses);
})

userRouter.get('/users/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course)
})


userRouter.post ('/users/courses', (req, res) => {
    // validating input using joi
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // Validation ends

    const course = {
        id: courses.length + 1,
        name: result.value.name
    }
    courses.push(course);
    res.send(course);
})


// userRouter.get('/users/courses/:id', (req, res) => {
//     res.send(req.params.id);
// })

// userRouter.get('/users/courses/:name/:year', (req, res) =>  {
//     res.send(req.query);
// })  

userRouter.put('/users/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404 - Bad Request
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course wit the given ID was not found');
        return
    }
    // Validate
    // If invalid, return 404 - Bad request
    const schema = Joi.object ({
        name: Joi.string().min(3).required()
    })

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return
    }

    // Update course
    course.name = result.value.name;
    // Return the updated course
    res.send(course);
})


userRouter.delete('/users/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with the given ID was not found.');
        return
    }

    // Delete - if found
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
})

module.exports = userRouter;
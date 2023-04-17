

const userRouter = require('./users/'); // the /index.js is not added because we using index.js in users
const userCourse = require('./courses/courses.js');  //if you don't add the /courses.js, module will not be found

// exporting the router
module.exports = {
    userRouter,
    userCourse
}
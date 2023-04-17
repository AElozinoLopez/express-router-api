const mongoose = require('mongoose')

// WHich database do we want?
const MONGODB_URI = "mongodb+srv://express-router:Start123@cluster0.fy0avua.mongodb.net/expressRouter?retryWrites=true&w=majority"
// How do we connect to the db?
mongoose.connect(MONGODB_URI)
    .then((result) => {
        console.log("Connected to database sucessfully");
    })
    .catch(err => {err.message})
// How do we create the collections/model/schema in the db
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;

// How do we query the db?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = new Schema({
  username : {
    type: String,
    required: true,
    unique : true
  },
  email : {
    type: String,
    required: true,
    unique : true
  },
  password : {
    type: String,
    required: true
  }
},
{
    timestamps : true
});

let USER = mongoose.model("users",userData)
module.exports = USER

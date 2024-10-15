const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puzzleData = new Schema({
  title : {
    type: String,
    required: true,
    unique : true
  },
  description : {
    type: String,
    required: true
  },
  solution : {
    type: String,
    required: true
  },
  userID : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true
  }
},
{
    timestamps : true
});

let PUZZLE = mongoose.model("puzzle",puzzleData)
module.exports = PUZZLE

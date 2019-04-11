const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  score: {type: Number, default: 0}
});

module.exports = mongoose.model("Comment", CommentSchema);
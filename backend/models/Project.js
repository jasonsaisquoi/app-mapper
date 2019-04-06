//Post Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
  created: {type: Date},
  updated: {type: Date},
  project_name: String,
  project_summary: String,
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
})

ProjectSchema.pre("save", function(next) {
  const now = new Date();
  this.updated = now;

  if(!this.created) {
    this.created = now;
  }
  next();
});

module.exports = mongoose.model('Project', ProjectSchema )
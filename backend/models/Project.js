//Post Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
  project_name: {
    type: String
  },
  project_summary: {
    type: String
  },
  Score: {
    type: Number
  }
},{
  collection: 'project'
});

module.exports = mongoose.model('Project', Project )
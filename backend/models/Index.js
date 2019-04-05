const mongoose = require("mongoose");
mongoose.connect("mongodb:localhost/app-mapper");

module.exports.Project=require("./Project.js");
module.exports.Comment=require("./Comment.js");
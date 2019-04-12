const mongoose = require("mongoose");
mongoose.connect("process.env.MONGODB_URI || mongodb:localhost/app-mapper");

module.exports.Project=require("./Project.js");
module.exports.Comment=require("./Comment.js");
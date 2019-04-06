//Project routes

const express = require('express');
const projectRoutes = express.Router();

let Project = require('../models/Project');
let Comment = require('../models/Comment');

//create project
projectRoutes.route('/add').post( (req,res) => {
  let project = new Project(req.body);
  project.save()
    .then(project => {
      res.status(200).json({'project': 'project added in succesfully'});
    })
    .catch( err=> {
      res.status(400).send("unable to save project to database");
    });
});

//retrieve project
projectRoutes.route('/').get( (req,res) => {
  Project.find( (err, projects) => {
    if (err) return console.log(err);
    else res.json(projects);
  })
});

//individual project
projectRoutes.route('/:id').get( (req,res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) return console.log(err);
    else res.json(project);
  })
})

//edit project
projectRoutes.route('/update/:id').put( (req,res) => {
  Project.findById(req.params.id, function(err, project) {
    if (!project)
      res.status(404).send("data is not found!");
    else {
      project.project_name = req.body.project_name;
      project.project_summary = req.body.project_summary;

      project.save().then( project => {
        res.json('Update complete!');
      })
      .catch(err => {
        res.status(400).send("unable to update the DB!");
      })
    }
  })
});

//delete project
projectRoutes.route('/delete/:id').get( (req, res) => {
  Project.findOneAndDelete({_id: req.params.id}, (err, project) => {
    if (err) res.json(err)
    else res.json(project);
  });
});

//Voting Routes
projectRoutes.route('/vote-up/:id').get( (req,res) => {
  Project.findById(req.params.id, function(err, project) {
    if (!project) {
        res.status(404).send("data is not found!");
    } else {
      project.upvotes = project.upvotes + 1;
      project.save();
    }
  })
});

projectRoutes.route('/vote-down/:id').get( (req,res) => {
  Project.findById(req.params.id, function(err, project) {
    if (!project) {
        res.status(404).send("data is not found!");
    } else {
      project.downvotes = project.downvotes + 1;
      project.save();
    }
  })
});

//Comment Routes
//create project
projectRoutes.route('/:id/comments').post( (req,res) => {
  let comment = new Comment(req.body);

  comment.save()

  .then(comment => {
    return Project.findById(req.params.projectId);
  })
  .then(project => {
    project.comments.unshift(comment);
    return post.save()
  })

  .then(comment => {
    res.status(200).json({'project': 'comment added in succesfully'});
  })
  .catch( err=> {
    res.status(400).send("unable to save comment to database");
  });
});


module.exports = projectRoutes;
//Project routes

const express = require('express');
const projectRoutes = express.Router();

let Project = require('../models/Project');

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

//edit project
projectRoutes.route('/update/:id').post( (req,res) => {
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
  Project.findByIdAndRemove({_id: req.params.id}, (err, project) => {
    if (err) res.json(err)
    else res.json('successfully deleted!');
  });
});

//Comment Routes
projectRoutes.post("/posts/:postId/comments", (req,res) => {
  const comment = new Comment(req.body);

  //save instance of comment model to DB
  comment
    .save()
    .then(comment => {
      //redirect to the route
      return res.redirect('/');
    })
    .catch(err=> {
      console.log(err);
    })
})


module.exports = projectRoutes;
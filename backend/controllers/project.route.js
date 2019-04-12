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

//retrieve projects
projectRoutes.route('/').get( (req,res) => {
  const currentUser = req.user;
  Project.find({})
    .then(projects => {
      res.status(200).json(projects);
      console.log(currentUser);
    })
    .catch(err => console.log(err));
});

//get all comments
projectRoutes.route('/comments').get( (req,res) => {
  Comment.find( (err, comments) => {
    if (err) return console.log(err);
    else res.json(comments);
  })
})

//create comment
projectRoutes.route('/:id/comments').post( (req,res) => {
  let comment = new Comment(req.body);

  comment.save()

  .then(comment => {
    const id = req.params.id;
    return Project.findById(id);
    console.log(id)
  })
  .then(project => {
    project.comments.unshift(comment);
    return project.save()
  })

  .then(comment => {
    res.status(200).json({'project': 'comment added in succesfully'});
  })
  .catch( err=> {
    res.status(400).send("unable to save comment to database");
  });
});

//upvote comment
projectRoutes.route('/comments/vote-up/:id').get( (req,res) => {
  Comment.findById(req.params.id, function(err, comment) {
    if (!comment) {
        res.status(404).send("comment is not found!");
    } else {
      comment.score = comment.score + 1;
    }
    comment.save();
  })
});

//downvote comment
projectRoutes.route('/comments/vote-down/:id').get( (req,res) => {
  Comment.findById(req.params.id, function(err, comment) {
    if (!comment) {
        res.status(404).send("comment is not found!");
    } else {
      comment.score = comment.score - 1;
    }
    comment.save();
  })
});


//delete comment
projectRoutes.route('/:id/delete/:commentId').get( (req,res) => {
  Project.findById(req.params.id).then( project => {
    project.comments.shift();
    })
    .then(Comment.findOneAndDelete({_id: req.params.commentId}, (err, comment) => {
      if (err) res.json(err)
      else{
          res.json(comment)
        }
    })
  )
});

projectRoutes.route('/:id/comments/:commentId/replies/').get((req, res) => {
  let project;
    Project.findById(req.params.id)
      .then(p => {
        project = p;
        return Comment.findById(req.params.commentId);
      })
      .then(comment => {
        res.status(200).json(comment);
      })
      .catch(err => {
        console.log(err.message);
      });
  });
  // CREATE REPLY
    projectRoutes.route("/:id/comments/:commentId/replies/", (req, res) => {
    console.log(req.body);
})

// CREATE REPLY
projectRoutes.route("/:id/comments/:commentId/replies", (req, res) => {
  // TURN REPLY INTO A COMMENT OBJECT
  const reply = new Comment(req.body);
  Project.findById(req.params.id)
      .then(project => {
          // FIND THE CHILD COMMENT
          Promise.all([
              reply.save(),
              Comment.findById(req.params.commentId),
          ])
              .then(([reply, comment]) => {
                  // ADD THE REPLY
                  comment.comments.unshift(reply._id);

                  return Promise.all([
                      comment.save(),
                  ]);
              })
              .then(() => {
                  res.status(200).json(reply);
              })
              .catch(console.error);
          // SAVE THE CHANGE TO THE PARENT DOCUMENT
          return project.save();
      })
});

//individual project
projectRoutes.route('/:id').get( (req,res) => {
  // Project.findById(req.params.id, (err, project) => {
  //   if (err) return console.log(err);
  //   else { 
  //     res.json(project)
  //   };
  // })
  Project.findById(req.params.id).populate('comments').then((project) => {
    res.json(project)
  })
  .catch( err => {
    console.log(err);
  })
})

//Comment Routes


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

//Project Voting Routes
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



module.exports = projectRoutes;
const db = require('../config/db.mongo.config');
const ProjectModel = require('../model/project_model');

exports.findAll = function(req, res, next) {
  ProjectModel.find(function(err, projects) {
    if (err) {
      return next(err);
    } else {
      console.log(projects);
      res.send({payload: projects});
    }
  });
};
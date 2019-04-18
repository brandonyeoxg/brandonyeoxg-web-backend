const db = require('../config/db.config.js');
const Projects = db.projects;

exports.findAll = function(req, res) {
    Projects.findAll().then(projects => {
        res.send({payload: projects});
    }).catch(err => {
        res.state(500).send("Error -> " + err)
    })
};
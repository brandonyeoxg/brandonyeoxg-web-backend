const db = require('../config/db.config.js');
const Projects = db.projects;

exports.findAll = function(req, res) {
    Projects.findAll().then(books => {
        res.send(books);
    }).catch(err => {
        res.state(500).send("Error -> " + err)
    })
};
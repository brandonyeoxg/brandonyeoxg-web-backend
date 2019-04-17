module.exports = (app) => {
    const projects = require('../controller/project.controller.js');

    app.get('/api/projects', projects.findAll);
}
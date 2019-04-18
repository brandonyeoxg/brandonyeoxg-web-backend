module.exports = function(app) {
    const projects = require('../controller/project.controller.js');
    app.get('/', (req, res) => {
        res.send('Hello world!');
    })
    app.get('/api/projects', projects.findAll);
}
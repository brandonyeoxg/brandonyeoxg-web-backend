module.exports = function(app) {
    const projects = require('../controller/project_controller.js');
    app.get('/', (req, res, next) => {
        res.send('Hello world!');
    })
    app.get('/api/projects', projects.findAll);
}
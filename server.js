var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./app/config/db.config.js');

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync with { force: true }');
// })

require('./app/route/project.route.js')(app)

var server = app.listen(8080, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});
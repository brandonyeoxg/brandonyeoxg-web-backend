const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app/route/project_route.js')(app)

const ProjectModel = require('./app/model/project_model');
const mongoose = require('mongoose');

const server = app.listen(8080, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});
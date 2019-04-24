const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app/route/project.route.js')(app)

const ProjectModel = require('./app/model/project_model');
const mongoose = require('mongoose');


// const project1 = new ProjectModel({
//   title: 'Todo List', 
//   summary: 'This todo list is made using react redux and firebase.',
//   detail: 'This todo list is made as a project to learn the usage of react redux and firebase. The project was made by following the tutorial posted by the channel NetNinja.',
//   img_src: './img/todolist-summary.jpg',
//   link: 'https://bran-todo.firebaseapp.com',
//   created_at: new Date(),
//   updated_at: new Date()
// })

// const project2 = new ProjectModel({
//   title: 'Happy Jim Task Master', 
//   summary: 'This task manager is done during CS2103T introduction to Software Engineering',
//   detail: 'This is a desktop task manager application. It has a GUI but most of the user interactions happen using a CLI (Command Line Interface).It is a Java application intended for people who can type fast, spend most of the time near a computer, and prefer typing over mouse/voice commands',
//   img_src: './img/happyjimtaskmaster-summary.jpg',
//   link: 'https://github.com/CS2103AUG2016-W09-C2/main',  
//   created_at: new Date(),
//   updated_at: new Date()
// })

// const project3 = new ProjectModel({
//   title: 'Static Program Analyser', 
//   summary: 'This Static Program Analyser was done in CS3101/2 Software Engineering module in school.',
//   detail: 'This Static Program Analyser takes in the source code called SIMPLE and analyses it for parsing or syntax error. It is also able to provide additional information through the Program Query Language (PQL) which allows querying of additional function. Such functions that can be queried are checking if a varaible was modified or affected by another variable. Additionally the next executed line can also be queried from the advanced querying system.',
//   img_src: './img/simplespa-summary.jpg',
//   link: 'https://github.com/brandonyeoxg/cs3201-simple-spa',
//   created_at: new Date(),
//   updated_at: new Date()
// })

// project1.save(function(err, project) {
//   if (err) return console.error(err);
//   project2.save(function(err, project) {
//     if (err) return console.error(err);
//     project3.save(function(err, project) {
//       if (err) return console.error(err);
//     })
//   })
// })

const server = app.listen(8080, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});
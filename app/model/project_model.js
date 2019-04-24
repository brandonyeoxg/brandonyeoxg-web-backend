const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('node-uuid');

const ProjectSchema = new Schema({
  _id: {type: String, default: uuid.v1},
  title: String,
  summary: String,
  detail: String,
  img_src: String,
  link: String,
  created_at: Date,
  updated_at: Date
})

ProjectSchema.virtual('email').get(function() {
  return this.id;
})

const ProjectModel = mongoose.model('ProjectModel', ProjectSchema);

module.exports = ProjectModel;
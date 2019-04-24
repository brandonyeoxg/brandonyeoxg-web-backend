const env = require('./env');

const mongoose = require('mongoose');
const db_url = `mongodb://${env.host}:${env.port}`;

mongoose.connect(db_url, {useNewUrlParser: true, user: env.username, pass: env.password, dbName: env.database});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db;
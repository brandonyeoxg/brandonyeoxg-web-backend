require('custom-env').env();
const mongoose = require('mongoose');
const db_url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

mongoose.connect(db_url, 
  {
    useNewUrlParser: true, 
    user: process.env.INITDB_ROOT_USERNAME, 
    pass: process.env.INITDB_ROOT_PASSWORD, 
    dbName: process.env.INITDB_DATABASE,
    reconnectInterval: 500,
    reconnectTries: Number.MAX_VALUE
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db;
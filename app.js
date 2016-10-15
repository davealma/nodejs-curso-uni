'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/node-course-db';
var user = require('./models/user');

MongoClient.connect(url, function(err, db) {
  if (err) {
      return console.log("Error in connection", err);
  }

  console.log("Connected correctly to server.");
  /*user.create({name: "David2", lastname: "Almanza3", age: 29}, db, function (error, result) {
      console.log('Registro creaado', result.ops);
  });*/
  /*user.findAll(db, function(error, users) {
      console.log(users);
  });*/
  /*user.update('001', {name: "Roger", lastname: "Gaitan", age: 32, cedula: '001'}, db, function (error, result) {
      console.log('Registro actualizado', result.ops);
      var user = result.ops[0];
      console.log(user.name);
  });*/

  user.deleteOne({cedula:'2008'}, db, function (error, result) {
      if(error) return console.error('Errror: ',error);
      console.log('Usuario borrado', result.result);
  });

  db.close();
});

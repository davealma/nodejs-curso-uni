'use strict';
var assert = require('assert');
function createUser(obj) {
    var User = {
        name: obj.name,
        lastname: obj.lastname,
        age: obj.lastname,
        cedula: obj.cedula
    };
    return User;
}
module.exports = {
    create: function(obj, db, cb) {
        var newUser = createUser(obj);
        db.collection('users').insertOne(obj, cb);
    },
    findAll: function (db, cb) {
        var cursor = db.collection('users').find();
        cursor.each(cb);
    },
    update: function(id, obj, db, cb) {
        var newUser = createUser(obj);
        db.collection('users').replaceOne({cedula: id}, obj, cb);
    },
    deleteOne: function(query, db, cb) {
        db.collection('restaurants').deleteOne(
            query,
            cb
        );
    }
};

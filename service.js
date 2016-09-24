module.exports = {
    getData: function(cb) {
        setTimeout(function () {
            cb(null, users);
        },2000);
    },
    show: function (id, cb) {
        users.map(function (user) {
            if (id == user.id) {
                return cb(null, user);
            }
        });
    },
    update: function(id, data, cb) {
        var newUsers = users.map(function(user) {
            if (id == user.id) {
                return data;
            }
            return user;
        });
        console.log(newUsers);
        return cb(null, newUsers)
    },
    create: function(data, cb) {
        setTimeout(function () {
            users.push(data);
            cb(null, users);
        }, 1000);
    },
    destroy: function (id, cb) {
        setTimeout(function () {
            var remainUsers = users.filter(function (user) {
                return id != user.id;
            });
            cb(null, remainUsers);
        }, 1000);
    }
};

var users = [
    {id:1, name: 'User1', age: 22},
    {id:2, name: 'User2', age: 23},
    {id:3, name: 'User3', age: 24}
];

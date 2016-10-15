var health = 10;

var getHit = function (amount) {
    health -= amount;
    return health;
}

module.exports.health = health;
module.exports.getHit = getHit;

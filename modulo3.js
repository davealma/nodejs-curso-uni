// HealthComponent.js

var HealthComponent = function (initialHealth) {

    this.health = initialHealth;

    this.getHit = function (amount) {
        this.health -= amount;
        return this.health;

    }

    return this;
}

module.exports = HealthComponent;

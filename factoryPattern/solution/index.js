// var Shopper = require('./Shopper');
// var Employee = require('./Employee');

var userFactory = require('./userFactory');

// var alex = new Shopper('Alex Banks', 100);
// var eve = new Employee('Eve Porcello', 100, 'This and That');

var alex = userFactory('Alex Banks', 100);
var eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log( alex.toString() )
console.log( eve.toString() )

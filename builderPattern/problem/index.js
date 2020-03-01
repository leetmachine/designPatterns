var Person = require('./Person')

/*issue- we're sending all the arguments to the constructor to create a variation of these Person's
 but to us as a developer Person('sue', true, true, 60) doesnt tell us anything. Especially the difference from Person('Bill', true, false, 20);
 ie: what is the first true? what is the second true/false? what is 60/20?
*/
// Employees
var sue = new Person('Sue', true, true, 60);
var bill = new Person('Bill', true, false, 20);
var phil = new Person('Phil', true, false);

// Shoppers
var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
var tabbitha = new Person('Tabbitha', false, false, 0, 1000);
 
var Shopper = require('./Shopper');
var Employee = require('./Employee');


var userFactory = (name, money=0, type, employer) => {

  // notice how easy it would be to add a new user type , like a 'Distributor'
  if(type === 'employee'){
    return new Employee(name, money, employer);
  } 
  // else if(type === 'distributor') {...}
  else {
    return new Shopper(name, money);
  }
}

module.exports = userFactory;
const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

const logger = new Logger();
logger.log('starting app...');

const alex = new Shopper('alex', 500);
const ski_shop = new Store('Steep and Deep supplies', [{item: 'Downhill skis', qty: 5, price: 750}, {item: 'Knit Hat', qty: 20, price: 5}]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.forEach(log => console.log(`  ${log.message}`));

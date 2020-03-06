/*Implemented as a subscriber
- it needs to have a 'notify' method that whatever it is subscribed to can call. 
*/

class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`${this.name}, there is a discount at ${storeName}- ${discount}% off everything.`);
    }
}

module.exports = Shopper;

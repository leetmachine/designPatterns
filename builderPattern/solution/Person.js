class Person {

    //ANTI-PATTERN: telescoping constructor. too many arguments make it confusing later in the code to identify which is what. 
    constructor(builder) {
        this.name = builder.name
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.money = builder.money || 0;
        this.shoppingList = builder.list || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;

# Factory Pattern
**intent:** Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

### Problem
using constructors directly in the client is ok, but it could cause problems as the application starts to expand. Lets say we add more user types- we'd have to keep track of all the constructors required for each individual type, which is not scalable. Especially if we update one, we need to find every place this constructor is being used and update it. 


### Solution
Instead of using the classes directly, we can use a factory method as a way to localize all of the constructors, and let the factory decide which type to create. We create all of users based off userFactory(...) and within our factory, we can use logic to check which type of user to create, and pass the appropriate params to its constructor. Now, all userFactories take the same parameters, and the class constructor for Employee or Shopper are localized in one place. 


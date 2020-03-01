# Builder Pattern
**intent:** Separate the construction of the complex object from its representation so that the same construction process can create different representations.

Builder pattern is solution to a specific anti-pattern called a 'telescoping constructor'.

### Problem
We have a complex a constructor that makes many variations of the same object. To gather this information we need many arguments in the constructor, which makes it difficult to read and manage. 

### Solution
We implement a Builder class that has methods to chain together the same variations of the large constructor, but now its clear in our code what each instance may represent. By implementing individual named methods for them it makes the client code much more readable. 

It's important that each method, returns its instance of the builder, so that the methods are chainable. 

Then, Builder needs a build method, which actually calls the desired class (ie: Person), with its builder instance, holding all the properties it has chained together. 


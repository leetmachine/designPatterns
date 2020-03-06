# Observer Pattern
**Intent:** Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. 

### Problem
We have an object that other objects care about, and we need them to know when that state changes.

### Solution
We implement the stateful object as an Observable object. We give it a subscribe method, which takes in subscribers and keeps track of that list. Each subscriber implements a notify method, that the Observable object can call when its state changes. In this example, whenever a Store announces a sale, it calls the notify method of each of its subscribers.
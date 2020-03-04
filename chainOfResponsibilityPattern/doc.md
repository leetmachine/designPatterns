# Chain of Responsibility
**intent:** Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain.

### Problem
We have similar objects that we want to work with in a specific order, but do not want to write specific, tightly-coupled code.

### Solution
We can use the chain of responsibility pattern to link this objects together, similar to a singly linked-list. This allows us to generalize the interface for the object, and impose logic to continue down the chain or return. In this example we implement this pattern to search for a store product in a specific order - store, backroom, nearby store, warehouse. The code is loosely coupled, because we use the same interface to 'find' an item and rely on the chain of responsibility to be invoked as we search, instead of writing a specific code that would search through all these storages. 


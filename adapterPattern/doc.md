# Adapter Pattern
**intent:** Convert the interface of a class into another that the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.


### Problem
We have some code that we want to reuse, but it relies on some specific API thats not available to us. such as localStorage is available in the browser, but not in NodeJS.

### Solution
We create an adapter of the unavailable API, that implements all the same methods that the original does, but we can chose the functionality of those methods. We're making an identical API of the original, but we're adapting the API for our use-case. 
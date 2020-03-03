# Decorator Pattern
**intent:** Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to sub-classing for extending functionality.

### Problem
We have a base object that we want to dynamically compose different functionality and/or properties. 

### Solution
We implement a decorator class for any instance of a dynamic change to the base class. The decorator class accepts a baseItem, which it will then 'decorate' with new values, methods, etc. In our example, we have a necklace item which we decorate as a 'golden item', which enhances its cost original cost. We also decorate this new 'golden necklace' as a 'diamond item' which increases its cost again, and gives it a new feature 'cutsGlass'. 
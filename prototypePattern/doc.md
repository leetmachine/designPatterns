# Prototype Pattern

**Intent:** Specify the kinds of objects to create using prototypical inheritance, and create new objects by copying this prototype.

### Problem 
We have instances of a class that share certain state. In this example, our two shoppers 'alex' and 'eve' are shopping for camping equipment, and share much of the same items in their 'shopping list'. 

### Solution
To reduce the redundancy of adding the same items like 'map, tent, etc.' to any 'scout' shopper that comes along, we can create a scout_prototype, which is an instance of Shopper, with these items already in the list. We use this prototype as the starting place for 'alex' and 'eve' by cloning it, and altering it further as needed. 

We needed to create a way to clone any Shopper prototype we need, so we add a clone method to shopper, which allows us to create a clone of any Shopper instance- and importantly any prototypes we have defined.
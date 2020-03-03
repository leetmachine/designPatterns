# Composite Pattern

**intent:** Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. 

### Problem
We have some objects that individually can do something, but we also want to do that same thing for the group of those objects, or the groups of the groups. Ultimately some tree structure where the leafs individually have some functionality, but we also want to impose the functionality of any level of a whole branch.

### Solution
We implement a composite class that has the same interface as the leafs. The composite class keeps track of its children, and implements each method in its interface as an aggregation or operation on all of its children. The composite class accepts individual leaf items, or groups as its children. 
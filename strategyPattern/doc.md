# Strategy Pattern
**intent:** Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### Problem
We want to decouple the process for doing a specific task from where it is used. Further, we want to allow multiple strategies to do that task, and dynamically decide which strategy to use at runtime.

### Solution
We identify all the ways we want to do a specific task, in this case logging. We implement a new strategy Fn for each of those ways. Then in our task where we want to use different strategies, we keep track of a reference to which Strategy we are currently implementing. This allows us to change the reference during runtime, via any method like initial config, or runtime changes. 
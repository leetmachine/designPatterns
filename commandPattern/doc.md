# Command Pattern
**intent:** Encapsulated a request as an object, thereby letting you parameterize with different requests, queue or log requests, and support undoable operations. 

### Problem
We have code that we want to dynamically execute as needed, and keep track of that history.

### Solution
We implement a switch statement for different cases to tell us which code we want to execute. Create a 'conductor' class which manages the execution of certain commands based on the case, as well as keeps track of the history, providing functions like showHistory, undo, redo. Each individual command implements an execute function, as well as an undo if it supports that. 
# Iterator Pattern

**intent:** Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

### Problem
We need a way to generally, and dynamically perform iterative operations on an array, just as moving through it, finding its first element, finding its last element, etc.

### Solution
We can create an Iterator class that will manage this logic in one place. It is an interface for keeping track of an iterators location, as well as gives other functionality for a list like hasNext(), first(), and last(). We simply implement this iterface in our class, and then pass in any list in its constructor. This makes it general, and reusable for any list.
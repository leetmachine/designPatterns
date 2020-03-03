# Proxy Pattern

**intent:** Provide a surrogate or placeholder for another object to control access to it.

### Problem
Some objects are expensive and deal with a lot of resources, or sensitive resources that should be tightly controlled, like the filesystem. You can't rely on the client to be responsible with these resources.


### Solution
We can implement a proxy object that implements the exact same interface as what we are proxying, so we can control how it is used. We want the API to be the same, but when we implement one of the methods we can add our own logic to control what happens- expensive operations, securing operations, etc. In this case, we implement readFile with a check to only allow the reading of markdown files. This is beneficial especially for something labor intensive, or machine sensitive, like reading the file system. With our proxy we now allow the same API access as the fs module, but with our controls in place for the client.
# Singleton Pattern

**Intent:** Ensure a class has only one instance, and provide a global point of access to it.


### Problem
In the problem, we need a single logger that exists within multiple places of our application- the index, the Shopper class, and the Store class. In the example code, we see that we create three instances of logger, instead of one. You can see that in our index.js logger, it only captures '2 total' messages, instead of the 4 that actually occur. This can be solved by turning Logger.js into a singleton.

### General Solution
In any OO solution you could create a singleton this way, where the exported class has a check in its constructor to only instantiate the class, if its not already there. Then adding a getInstance method, will allow any calls in the code to get the same instance, like we did in index, Shopper, and Store.

### Node Solution
In Node you can make this even simpler, by just exporting an instance of the Logger class. This is because NodeJS will load the logger file which creates the new instance. Node will store that instance in the cache, so any other module that requires it will get that instance.

Now in our index, Shopper, and Store class, we can simply require the logger, which is already a reference to the instantiated Logger class- so we don't need to create it in any of those files. 
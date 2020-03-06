var LogStrategy = require('./LogStrategy');
var config = require('./config');

class Logger {
    //the logger now can take a strategy when its constructed. Based on a config, or runtime construction. 
    constructor(strategy="toConsole") {
        this.logs = [];
        this.strategy = LogStrategy[strategy];
    }

    get count() {
        return this.logs.length
    }

    //then we can point the log Fn, to any strategy we want during runtime. 
    changeStrategy(newStrategy){
        this.strategy = LogStrategy[newStrategy];
    }

    //we want the logger to allow for different logging strategies.
    log(message) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        this.strategy(timestamp, message);
    }

}

module.exports = new Logger(config.logs.strategy);

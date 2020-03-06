class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length
    }

    //we want the logger to allow for different logging strategies.
    log(message) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        console.log(`${timestamp} - ${message}`)
    }

}

module.exports = new Logger();

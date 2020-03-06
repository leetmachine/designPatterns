var path = require('path');
var { appendFile } = require('fs');

//implements the strategy functions.
// each of these should take the same params, but they can execute them differently
//ie: log to console, log to file, log w/o date.
class LogStrategy {

  static noDate(timestamp, message){
    console.log(message);
  }

  static toFile(timestamp, message){
    var fileName = path.join(__dirname, 'logs.txt');
    appendFile(fileName, `${timestamp} - ${message} \n`, err => {
      if(err) console.log(err);
    });
  }
  
  static toConsole(timestamp, message){
    console.log(`${timestamp} - ${message}`);
  }

  static none(){
  }
}

module.exports = LogStrategy;
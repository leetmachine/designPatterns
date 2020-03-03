
//our proxy should implement all of the methods of what we are proxying.
class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  //we want to control the usage of readFile, so we can override its functionality.
  readFile(path, format, callback) {
    if(!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files`));
    }

    this.fs.readFile(path, format, (error, contents) => {
      if(error) {
        console.log(error);
        return callback(error);
      }

      callback(null, contents);
    });
  }
}

module.exports = FS_Proxy;
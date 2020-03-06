class Iterator {

  constructor(items=[]) {
    this.index = 0;
    this.items = items;
  }

  first(){
    this.index = 0;
    return this.current();
  }

  last(){
    this.index = this.items.length - 1;
    return this.current();
  }

  hasNext(){
    return this.index < this.items.length - 1;
  }

  current(){
    return this.items[this.index];
  }

  next(){
    if(this.hasNext()) {
      this.index += 1;
      return this.current();
    }
    return {writeLn: f => f};
  }

  prev(){
    if (this.index !== 0) {
      this.index -= 1;
      return this.current();
    }

    return { writeLn: f => f}
  }
}

module.exports = Iterator;
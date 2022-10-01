
class test {
  constructor() {
    this.me = document.querySelector('.test');
    this.descendants = {};
    this.init(this.me);

    console.log(this.descendants);
  }

  checkClassBem(cls) {
    if(!cls.includes('_')) {
      console.log('it is block');
    }
    else if(cls.includes(cls.match(/[^_]__[^_]/)) && !cls.includes(cls.match(/[^_]_[^_]/))) {
      console.log('it is element');
    }
    else if(cls.includes(cls.match(/[^_]_[^_]/))) {
      console.log('it is mod');
    }
    else {
      console.log('error');
    }
  }

  init(element) {
    for (let children of element.children) {
      this.descendants[children] = {};

      //this.checkBlock(children);
    }
  }
  checkBlock(element) {
    for(let c of element.classList) {
      console.log(c);
      if(!c.includes('_')) {
        console.log('it is block');
      }
      else {
        importBlock(c);
      }
    }
  }
  importBlock(cls) {
    //let module = import(createPath(cls));
    console.log("1");
  }
  createPath(cls) {
    let path = '../' + String(cls) + '/' + String(cls);
    return path;
  }
}

let t = new test();
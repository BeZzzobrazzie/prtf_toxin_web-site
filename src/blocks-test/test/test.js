//import {dropdown} from '../dropdown/dropdown';

//let i = new dropdown();

//let test = document.querySelector('.test');

class test {
  constructor() {
    this.me = document.querySelector('.test');
    this.elements = {};

    this.init(this.me);
    console.log(this.elements);

    this.arr = {};
    this.i = import('../dropdown/dropdown');
    console.log(this.i);
    //this.arr.y = new this.i.dropdown();
  }

  init(element) {
    for (let i of element.children) {
      //console.log(i.classList);
      for (let c of i.classList) {
        this.elements[c] = c;

      }
      this.init(i);
    }
    
  }

}

let t = new test();
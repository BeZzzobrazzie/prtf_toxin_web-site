import {baseClass} from '../baseClass/baseClass';

class test extends baseClass {

  hi() {
    console.log('hi');
  }
}



let el = document.querySelector('.test');
let t = new test(el);

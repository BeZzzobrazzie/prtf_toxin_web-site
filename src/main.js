//import './styles/index.scss';
import 'normalize.css';
import './js/test.js';


const userStack = {
    language: 'JavaScript',
    framework: 'None',
}

const user = {
    name: 'Zzz',
    age: '27',
    ...userStack
}

console.log(user);
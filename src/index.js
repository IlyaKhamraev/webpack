import './index.html';
import './style/normalize.css';
import './style/style.css';
import './style/fonts.css';
import { mult, sum } from './modules/index';

const arr = [10, 2];
const result = sum(...arr);

console.log(result);

console.log(mult(2, 8));
console.log(sum(2, 5));

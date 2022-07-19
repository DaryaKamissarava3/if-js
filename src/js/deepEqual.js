import { obj1, obj2, obj3 } from '../constants/objects.js';
import {deepEqual} from "../modules/deepEqual.js";

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

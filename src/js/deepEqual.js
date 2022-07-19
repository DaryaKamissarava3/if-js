import { obj1, obj2, obj3 } from '../modules/objects.js';

const deepEqual = (object1, object2) => {
  const bothAreObject = typeof object1 === 'object' && typeof object2 === 'object';
  const bothAreNotNull = object1 !== null && object2 !== null;

  if (bothAreObject && bothAreNotNull) {
    for (const key in object1) {
      if (!object1.hasOwnProperty(key)) {
        return false;
      }
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        const result = deepEqual(object1[key], object2[key]);

        if (!result) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return object1 === object2;
  }
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false

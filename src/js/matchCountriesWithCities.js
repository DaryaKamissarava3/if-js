import { hotels } from '../modules/arrays.js';

function resultArray(passedArray) {
  const arrayWithSeveralValues = [];
  const firstAddedArray = [];

  for (let i = 0; i < passedArray.length; i++) {
    if (!arrayWithSeveralValues[passedArray[i].country]) {
      arrayWithSeveralValues[passedArray[i].country] = {
        country: passedArray[i].country,
        city: [passedArray[i].city],
      };
      firstAddedArray.push(arrayWithSeveralValues[passedArray[i].country]);
    } else {
      arrayWithSeveralValues[passedArray[i].country].city.push(passedArray[i].city);
    }
  }

  return firstAddedArray;
}

console.log(resultArray(hotels));

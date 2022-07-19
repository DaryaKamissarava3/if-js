import { hotels } from '../constants/arrays.js';

function showInformation(str, arrOfHotels) {
  return arrOfHotels.filter((hotel) => {
    if (hotel.country === str || hotel.city === str || hotel.name === str) {
      return true;
    }
    return false;
  });
}

const searchItem1 = 'Germany';
console.log(showInformation(searchItem1, hotels));
const searchItem2 = 'Hamburg';
console.log(showInformation(searchItem2, hotels));

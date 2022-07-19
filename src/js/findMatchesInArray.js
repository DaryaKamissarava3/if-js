import { data } from '../constants/arrays.js';

function searchInformation(str) {
  const resultOfSearch = data.filter((element) => Object.values(element).includes(str));
  resultOfSearch.forEach((item) => console.log(item));
}

searchInformation('Berlin');
searchInformation('Rokoko Hotel');

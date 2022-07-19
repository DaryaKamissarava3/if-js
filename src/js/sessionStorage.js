import bubbleSort from '../modules/bubbleSort.js';
import { fetchData } from '../modules/requests.js';

const cardWithPictures = document.getElementById('card');

async function checkSessionStorage() {
  let hotels = JSON.parse(sessionStorage.getItem('arrayOfHotels'));
  if (!hotels) {
    hotels = await fetchData('https://fe-student-api.herokuapp.com/api/hotels/popular');
    sessionStorage.setItem('arrayOfHotels', JSON.stringify(hotels));
  }
  let sortArray = bubbleSort(hotels);
  sortArray.forEach((item) => {
    const newCardItem = document.createElement('div');
    newCardItem.className = 'card-item';
    newCardItem.innerHTML = `
           <img class="card-img col-s-12" src="${item.imageUrl}" alt="picture isn't load">
           <div class="card-hostel-name">${item.name}</div>
           <div class="card-hostel-location">${item.city}, ${item.country}</div>`;
    cardWithPictures.appendChild(newCardItem);
  });
}

checkSessionStorage().catch((error) => console.log(error));

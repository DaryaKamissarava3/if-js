import bubbleSort from '../modules/bubbleSort.js';
import { arrFromFetch } from '../modules/requests.js';

const cardWithPictures = document.getElementById('card');

async function checkSessionStorage() {
  let hotels = JSON.parse(sessionStorage.getItem('arrayOfHotels'));
  if (!hotels) {
    hotels = await arrFromFetch();
    sessionStorage.setItem('arrayOfHotels', JSON.stringify(hotels));
  }
  bubbleSort(hotels);
  hotels.forEach((item) => {
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

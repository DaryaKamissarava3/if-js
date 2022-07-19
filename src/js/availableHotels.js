import { fetchData } from '../modules/requests.js';

let sectionForAvailableHotels = document.getElementById('section');
let btn = document.getElementById('search-btn');
let destinationInput = document.getElementById('destination');
let peopleInput = document.getElementById('count-guests');

btn.addEventListener('click', showInformation);

async function searchForHotels() {
  let resOfPeople = peopleInput.value;

  let numbersArrFromPeopleInput = resOfPeople.match(/\d+/g);
  let numberOfAdults = numbersArrFromPeopleInput[0];
  let numberOfRooms = numbersArrFromPeopleInput[numbersArrFromPeopleInput.length - 1];

  let ageOfChildren;
  let toNumberAgeOfChildren;
  let arr = [];
  let selects = document.querySelectorAll('#id-div-for-select select');
  selects.forEach((element) => {
    ageOfChildren = element.value;
    toNumberAgeOfChildren = parseInt(ageOfChildren.match(/\d+/));
    arr.push(toNumberAgeOfChildren);
  });

  let textInInput = destinationInput.value.toLowerCase();
  const info = await fetchData(
    ` https://fe-student-api.herokuapp.com/api/hotels?search=${textInInput}&adults=${numberOfAdults}&children=${arr}&rooms=${numberOfRooms}`,
  );
  if (info.length === 0) {
    alert('No such hotel');
    return;
  }
  sectionForAvailableHotels.className = 'section search-hotels-section';
  let divContainer = document.createElement('div');
  let sectionHeader = document.createElement('div');
  let sectionSubtitle = document.createElement('h2');
  divContainer.className = 'container search-hotels-container';
  divContainer.id = 'search-hotels-container';
  sectionForAvailableHotels.appendChild(divContainer);
  sectionHeader.className = 'section-header';
  divContainer.appendChild(sectionHeader);
  sectionSubtitle.className = 'section-subtitle underline';
  sectionSubtitle.textContent = 'Available Hotels';
  sectionHeader.appendChild(sectionSubtitle);
  info.forEach((item) => {
    let divForHotels = document.createElement('div');
    divForHotels.className = 'search-hotels';
    divForHotels.innerHTML = `<img class="card-img col-s-12" src="${item.imageUrl}" alt="picture isn't load">
                    <div class="card-hostel-name">${item.name}</div>
                    <div class="card-hostel-location">${item.city}, ${item.country}</div>`;
    divContainer.appendChild(divForHotels);
  });
}

async function showInformation() {
  let containerWithElements = document.getElementById('search-hotels-container');
  if (!containerWithElements) {
    await searchForHotels();
    return;
  }
  containerWithElements.remove();
  await searchForHotels();
}

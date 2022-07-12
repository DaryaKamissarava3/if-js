let sectionForAvailableHotels = document.getElementById('section');
let destinationInput = document.getElementById('destination');

document.getElementById('search-btn').addEventListener('click', showInformation);

const onSearch = async (strForSearch) => {
  const response = await fetch(
    ` https://fe-student-api.herokuapp.com/api/hotels?search=${strForSearch}`,
  );
  return response.json();
};

async function addAvailableHotels() {
  let textInInput = destinationInput.value.toLowerCase();
  const info = await onSearch(textInInput);
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
    await addAvailableHotels();
    return;
  }
  containerWithElements.remove();
  await addAvailableHotels();
}

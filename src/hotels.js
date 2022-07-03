let sectionForAvailableHotels = document.getElementById('section');

function showInformation(str, hotels) {
  let arr = hotels.filter((el) => el.country === str || el.city === str || el.name === str);
  console.log(arr);
  arr.forEach((item) => {
    if (arr.length !== 0) {
      sectionForAvailableHotels.className = 'section';
      let divContainer = document.createElement('div');
      let sectionHeader = document.createElement('div');
      let sectionSubtitle = document.createElement('h2');
      let divForHotels = document.createElement('div');
      divContainer.className = 'container';
      sectionForAvailableHotels.appendChild(divContainer);
      sectionHeader.className = 'section-header';
      divContainer.appendChild(sectionHeader);
      sectionSubtitle.className = 'section-subtitle underline';
      sectionSubtitle.textContent = 'Available Hotels';
      sectionHeader.appendChild(sectionSubtitle);
      divForHotels.innerHTML = `<img class="card-img col-s-12" src="${item.imageUrl}" alt="picture isn't load">
    <div class="card-hostel-name">${item.name}</div>
    <div class="card-hostel-location">${item.city}, ${item.country}</div>`;
      divContainer.appendChild(divForHotels);
      return true;
    } else {
      alert('does not exist');
    }
  });
}
function onChange() {
  fetch('https://fe-student-api.herokuapp.com/api/hotels')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let destinationInput = document.getElementById('destination');
        let textInInput = destinationInput.value;
        console.log(textInInput);

        console.log(showInformation(textInInput, result));
      });
}
document.getElementById('search-btn').addEventListener('click', onChange);



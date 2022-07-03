const cardWithPictures = document.getElementById('card');

function addPictureToBlock() {
  fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((item) => {
        const newCardItem = document.createElement('div');
        newCardItem.className = 'card-item';
        newCardItem.innerHTML = `
    <img class="card-img col-s-12" src="${item.imageUrl}" alt="picture isn't load">
    <div class="card-hostel-name">${item.name}</div>
    <div class="card-hostel-location">${item.city}, ${item.country}</div>`;
        cardWithPictures.appendChild(newCardItem);
      });
    });
}

addPictureToBlock();

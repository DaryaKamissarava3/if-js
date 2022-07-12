const cardWithPictures = document.getElementById('card');

const arrFromFetch = async () => {
    try {
        const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels/popular`);
        return response.json();
    } catch (error) {
        console.log(error.message);
    }
};

async function checkSessionStorage() {
    let hotels = sessionStorage.getItem('arrayOfHotels')
    if (!hotels) {
        const hotels = await arrFromFetch();
        sessionStorage.setItem('arrayOfHotels', JSON.stringify(hotels));
    }
    let result = sessionStorage.getItem('arrayOfHotels');
    JSON.parse(result).forEach((item) => {
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

let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('#count-guests');
let closePopupButton = document.querySelector('.close-popup');

let labelInput = document.getElementById('label-guests');
let inputResult = document.getElementById('count-guests');

let counterForRooms = 0;
let counterForChildren = 0;
let counterForAdults = 0;
let numberOfChildren = 0;

function counterNumberOfAdults() {
    const direction = this.dataset.direction;
    const inputAdults = this.parentElement.querySelector('.counter-value-adults');
    if (direction === 'plus') {
        if (counterForAdults < 30) {
            counterForAdults = counterForAdults + 1;
        }
    } else {
        counterForAdults = counterForAdults - 1 > 0 ? counterForAdults - 1 : 0;
    }
    labelInput.remove();
    inputAdults.value = counterForAdults;
    inputResult.value = `Adults -${counterForAdults}`;
}

function counterNumberOfChildren() {
    const direction = this.dataset.direction;
    const inputChildren = this.parentElement.querySelector('.children-value');
    if (direction === 'plus') {
        if (counterForChildren < 10) {
            counterForChildren = counterForChildren + 1;
        }
    } else {
        counterForChildren = counterForChildren - 1 > 0 ? counterForChildren - 1 : 0;
    }
    inputChildren.value = counterForChildren;
    labelInput.remove();
    inputResult.value = `Children - ${counterForChildren}`;
}

function counterNumberOfRooms() {
    const direction2 = this.dataset.direction;
    const inputRooms = this.parentElement.querySelector('.counter-value-rooms');
    if (direction2 === 'plusRoom') {
        if (counterForRooms < 30) {
            counterForRooms = counterForRooms + 1;
        }
    } else {
        counterForRooms = counterForRooms - 1 > 0 ? counterForRooms - 1 : 0;
    }
    labelInput.remove();
    inputRooms.value = counterForRooms;
    inputResult.value = `Room -${counterForRooms}`;
}

document.querySelector('.children-plus').addEventListener('click', (event) => {
    if (numberOfChildren === 0) {
        const modulePopup = document.querySelector('.popup');
        const newDivWithText = document.createElement('div');

        const newDivText = document.createTextNode(
            "What is the age of the child you're travelling with ?",
        );
        newDivWithText.className = 'popup-text-block';
        newDivWithText.id = 'text-block';

        newDivWithText.appendChild(newDivText);
        modulePopup.appendChild(newDivWithText);
        addSelect();
    } else if (numberOfChildren < 10) {
        addSelect();
    }
});

function addSelect() {
    let divWithText = document.querySelector('.popup-text-block');
    let divForSelect = document.createElement('div');
    divForSelect.className = 'div-for-select';
    divForSelect.id = 'id-div-for-select';
    let array = [
        '1 years old',
        '2 years old',
        '3 years old',
        '4 years old',
        '5 years old',
        '6 years old',
        '7 years old',
        '8 years old',
        '9 years old',
        '10 years old',
        '11 years old',
        '12 years old',
        '13 years old',
        '14 years old',
        '15 years old',
        '16 years old',
        '17 years old',
    ];
    const selectList = document.createElement('select');
    selectList.id = 'mySelect';
    selectList.className = 'popup-children-select';
    divWithText.appendChild(divForSelect);
    divForSelect.append(selectList);

    for (let i = 0; i < array.length; i++) {
        const option = document.createElement('option');
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    numberOfChildren += 1;
}

document.querySelector('.children-min').addEventListener('click', (e) => {
    let deleteSelect = document.querySelectorAll('.div-for-select');
    let deleteText = document.getElementById('text-block');
    let lengthOfSelectedDivs = deleteSelect.length;
    if (lengthOfSelectedDivs > 1) {
        deleteSelect[0].parentNode.removeChild(deleteSelect[0]);
    } else {
        deleteSelect[0].parentNode.removeChild(deleteSelect[0]);
        deleteText.remove();
        numberOfChildren = 0;
    }
});
const buttonForChildren = document.querySelectorAll('.children-btn');
buttonForChildren.forEach((btn) => {
    btn.addEventListener('click', counterNumberOfChildren);
});

const buttonOfAdults = document.querySelectorAll('.counter-btn-adults');
buttonOfAdults.forEach((btn) => {
    btn.addEventListener('click', counterNumberOfAdults);
});

const buttonOFRooms = document.querySelectorAll('.counter-btn-rooms');
buttonOFRooms.forEach((btn) => {
    btn.addEventListener('click', counterNumberOfRooms);
});

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    });
});

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    });
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

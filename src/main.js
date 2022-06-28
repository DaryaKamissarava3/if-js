let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('#count-guests');
let closePopupButton = document.querySelector('.close-popup');

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

const counterChildren = function () {
  const buttons = document.querySelectorAll('.children-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const input = this.parentElement.querySelector('.children-value');
      const curValue = +input.value;
      let newValue;

      if (direction === 'plus') {
        if (curValue < 10) {
          newValue = curValue + 1;
        } else {
          newValue = curValue;
        }
      } else {
        newValue = curValue - 1 > 0 ? curValue - 1 : 0;
      }
      input.value = newValue;
    });
  });
};

const counterAdultsAndRooms = function () {
  const buttons = document.querySelectorAll('.counter-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter-value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        if (currentValue < 30) {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue;
        }
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }
      inp.value = newValue;
    });
  });
};

counterAdultsAndRooms();
counterChildren();

let numberOfChildren = 0;

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
  }
});

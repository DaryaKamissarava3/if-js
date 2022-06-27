let popupBg = document.querySelector(".popup-bg");
let popup = document.querySelector(".popup");
let openPopupButtons = document.querySelectorAll("#count-guests");
let closePopupButton = document.querySelector(".close-popup");

openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        popupBg.classList.add("active");
        popup.classList.add("active");
    });
});

openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        popupBg.classList.add("active");
        popup.classList.add("active");
    });
});

document.addEventListener("click", (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove("active");
        popup.classList.remove("active");
    }
});

const counter = function () {
    const buttons = document.querySelectorAll('.counter-btn');

    buttons.forEach(btn => {
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
        })
    })
}

counter();

function addSelect() {
    let modulePopup = document.querySelector('.popup');
    let divForSelect = document.createElement('div');
    divForSelect.className = 'div-for-select';
    divForSelect.id = 'id-div-for-select'
    let array = ["1 years old", "2 years old", "3 years old", "4 years old", "5 years old", "6 years old", "7 years old", "8 years old", "9 years old", "10 years old", "11 years old", "12 years old", "13 years old", "14 years old", "15 years old", "16 years old", "17 years old"];
    let selectList = document.createElement("select");
    selectList.id = "mySelect";
    selectList.className = 'popup-children-select';
    modulePopup.appendChild(divForSelect)
    divForSelect.append(selectList);

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
}

document.querySelector('.children-plus').addEventListener("click", event => {
    let modulePopup = document.querySelector('.popup');
    let newDiv = document.createElement('div');

    let newDivText = document.createTextNode('What is the age of the child you\'re travelling with ?');
    newDiv.className = 'popup-children';
    newDiv.id = 'text-block';
    let element = document.getElementById('text-block');
    if (typeof (element) != 'undefined' && element != null) {
        addSelect();
    } else {
        newDiv.appendChild(newDivText);
        modulePopup.appendChild(newDiv);
        addSelect();
    }
});

document.querySelector('.children-min').addEventListener('click', e => {
    let deleteSelect = document.getElementById('id-div-for-select');
    if (typeof (deleteSelect) != 'undefined' && deleteSelect != null) {
        deleteSelect.remove();
    } else {
        let deleteDivText = document.getElementById('text-block');
        deleteDivText.remove();

    }
});

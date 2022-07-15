const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const changeColor = () => {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
};

const changeColor1 = changeColor();
const changeColor2 = changeColor();
const changeColor3 = changeColor();

p1.addEventListener('click', changeColor1);
p2.addEventListener('click', changeColor2);
p3.addEventListener('click', changeColor3);

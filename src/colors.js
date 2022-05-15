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

p1.addEventListener('click', changeColor());
p2.addEventListener('click', changeColor());
p3.addEventListener('click', changeColor());

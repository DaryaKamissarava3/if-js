function palindrome(str) {
  const changeString = str.toLowerCase();
  const reverseString = changeString.split('').reverse().join('');
  if (changeString === reverseString) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('ctc'));

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function max2(a, b) {
  return a > b ? a : b;
}

function min2(a, b) {
  return a > b ? b : a;
}

console.log(max(3, 5));
console.log(min(3, 5));
console.log(max2(3, 5));
console.log(min2(3, 5));

const array = [];

function fillArray(arr) {
  for (let i = 0; i < 10; i++) {
    const randomElement = Math.round(Math.random() * 100);
    arr.push(randomElement);
  }
  return arr;
}

const replaceZero = (arr) => String(arr).replaceAll('0', 'zero');
console.log(fillArray(array));
console.log(replaceZero(array));

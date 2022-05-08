function palindrome(str) {
  const changeString = str.replace(/(^A-Z0-9)/gi, '').toLowerCase();
  const check = changeString.split('').reverse().join('');
  if (changeString === check) {
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

function showArray(arr) {
  for (let i = 0; i < 10; i++) {
    const a = Math.round(Math.random() * 100);
    arr.push(a);
  }
  return arr;
}

const replaceZero = (arr) => String(arr).replaceAll('0', 'zero');
console.log(showArray(array));
console.log(replaceZero(array));
let user = 'John Doe';
console.log(user);
const student = 'Darya';
console.log(student);
user = student;// Darya
console.log(user);
let test = 1;
test += test;
test = `${test}1`;// 21
console.log(test);
test--;// 20
console.log(test);
test = Boolean(test);// true
console.log(test);
const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    console.log(arr2[i]);
  }
}

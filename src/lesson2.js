function palindrome(str) {
    var changeString = str.replace(/(^A-Z0-9)/ig, "").toLowerCase();
    var checkPalindrome = changeString.split('').reverse().join('');
    if (changeString === checkPalindrome) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("ctc"));

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

function array() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.random * 100);
    }
    return arr;
}
console.log(array());
function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator).reverse();

    return arrayOfStrings.join('.');
}

const date = '2020-11-26';
const secondDate = '2022-05-11';

const symbol = '-';

console.log(splitString(date, symbol));
console.log(splitString(secondDate, symbol));
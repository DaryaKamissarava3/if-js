export const sum = function (a) {
    return function (b) {
        return a + b;
    };
};
console.log(sum(5)(2));
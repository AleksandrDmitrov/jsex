'use strict';

// const sayHalloArrow = () => {
//     alert('rjhgrejhguijr');
// }
// sayHalloArrow();

/**
 *
 * @param a {number}
 * @param b{number}
 * @returns {*} {number}
 */
function sum(a, b) {
    return a + b;
}

console.log(sum(555, 554));

const sumArrow = (a, b) => {
    return a + b;
}
console.log(sumArrow(555, 554));



const arrowFac = n => n === 0
    ? 1
    : n * arrowFac(n - 1);

const  arr = [1, 2, 3, 4, 5, 6, 7];
const isOdd = n => n % 2 !== 0;
const oddDigits = arr.filter(isOdd);

const arrowSum = (...args) => {
    let total = null;
    for (let i = 0; i < args.length; i++){
        total += args[i];
    }
return total;
}
// создает масив
console.log(arrowSum(54,4787,45,89));
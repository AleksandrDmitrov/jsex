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



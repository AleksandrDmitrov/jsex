/**
 *
 * @param a
 * @param b
 * @param c
 * @returns {null|number[]|number}
 */
function sum(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d < 0) {
        return null;
    }
    if (d === 0) {
        return -b / (2 * a);
    }
    const x1 = (-b + d * 0.5) / 2 * a;
    const x2 = (-b - d * 0.5) / 2 * a;
    return [x1, x2];

}

const a = prompt("введите а");
const b = prompt("введите b");
const c = prompt("введите c");

sum(a, b, c);

/**
 *
 * @param m
 * @returns {string}
 */
function chet(m) {
    if (m % 2 === 0) {
        return ("true");
    } else {
        return ("false");
    }
}

const m = prompt("введите число");
chet(m);

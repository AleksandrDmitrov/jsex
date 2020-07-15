'use strict';


class Stack {
    constructor(maxSize = 10000) {
        if (typeof maxSize !== 'number') {
            throw new TypeError();
        }
        if (isNaN(maxSize) || maxSize < 0 || !Number.isInteger(maxSize)) {
            throw new RangeError();
        }
        this._size = 0;
        this._maxSize = maxSize;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    push(value) {

        if (this._size >= this._maxSize) {
            throw new RangeError('Stack overflow');
        }
        this[`_${this._size++}`] = value;

        return this._size;
    }

    pop() {
        if (this.isEmpty) {
            return;
        }
        const lastItem = this[`_${--this._size}`];
        delete this[`_${this._size}`];
        return lastItem;
    }

    pick() {
        if (this.isEmpty) {
            return;
        }
        return this[`_${this._size - 1}`];
    }
}

const userString = prompt('Please, input your string');
let stack = new Stack();

for (let i = 0; i <= userString.length - 1; ++i) {
    if (userString[i] === '(' || userString[i] === '[' || userString[i] === '{') {
        stack.push(userString[i]);
    }

    if (userString[i] === ')' && stack.pick() === '(') {
        stack.pop();
    }

    if (userString[i] === ']' && stack.pick() === '[') {
        stack.pop();
    }

    if (userString[i] === '}' && stack.pick() === '{') {
        stack.pop();
    }
}

if (stack.isEmpty) {
    alert('Your brackets sequence is right.');
} else {
    alert('Your brackets sequence is wrong.');
}
